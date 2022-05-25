import { useQuery,useMutation, useQueryClient } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

const addSuperHero = (hero) => {
  return axios.post("http://localhost:4000/superheroes",hero)
}

export const useSuperHerosData = (onSuccessCallback,onErrorCallback) => {
   return  useQuery(
        "super-heros",
        fetchSuperHeros,
        { 
          // cacheTime: 500000, /* By default all the results are cached to 5mins */
          // staleTime: 30000 /*  Staletime is the time limit set of refetching. During this time the refetch will not occur. Bydefault it is set to zero.*/
          // refetchOnMount: true,
          // refetchOnWindowFocus: true,
          //refetchInterval: poolTime, /* If we want to pool the api then you can set a number over here. Default is set to false. Use Case: Stock prices etc.. */
          // enabled: false,
          onSuccess: onSuccessCallback,
          onError: onErrorCallback,
          // select: (data) => {
          //   const superHeroNames = data.data.map((hero) => hero.name)
          //   return superHeroNames
          // }
        }
      );
}

export const useAddSuperHeroData = () => {
  const queryClient = useQueryClient()

  return useMutation(addSuperHero, {
    // onSuccess: data => {
    //   /** Query Invalidation Start */
    //   // queryClient.invalidateQueries('super-heros')
    //   /** Query Invalidation End */

    //   /** Handling Mutation Response Start */
    // queryClient.setQueryData('super-heros', oldQueryData => {
    //   return {
    //     ...oldQueryData,
    //     data: [...oldQueryData.data, data.data]
    //   }
    // })
    //   /** Handling Mutation Response Start */
    // },
    /**Optimistic Update Start */
    onMutate: async newHero => {
      await queryClient.cancelQueries('super-heros')
      const previousHeroData = queryClient.getQueryData('super-heros')
      queryClient.setQueryData('super-heros', oldQueryData => {
        return {
          ...oldQueryData,
          data: [
            ...oldQueryData.data,
            { id: oldQueryData?.data?.length + 1, ...newHero }
          ]
        }
      })
      return { previousHeroData }
    },
    onError: (_err, _newTodo, context) => {
      queryClient.setQueryData('super-heros', context.previousHeroData)
    },
    onSettled: () => {
      queryClient.invalidateQueries('super-heros')
    }
    /**Optimistic Update End */
  })
}