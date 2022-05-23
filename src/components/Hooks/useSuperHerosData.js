import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superheroes");
  };

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