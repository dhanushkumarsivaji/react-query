import { useQuery } from "react-query";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:4000/superheroes");
};

export const RQSuperHeroesPage = () => {

  const onSuccessCallback = (data) => {
    console.log("On Success Callback Is Called",data)
  } 

  const onErrorCallback = (data) => {
    console.log("On Success Callback Is Called",data)
  } 

  const { isLoading, data, isError, error, isFetching, refetch } = useQuery(
    "super-heros",
    fetchSuperHeros,
    { 
      // cacheTime: 500000, /* By default all the results are cached to 5mins */
      // staleTime: 30000 /*  Staletime is the time limit set of refetching. During this time the refetch will not occur. Bydefault it is set to zero.*/
      // refetchOnMount: true,
      // refetchOnWindowFocus: true,
      //refetchInterval: false, /* If we want to pool the api then you can set a number over here. Default is set to false. Use Case: Stock prices etc.. */
      // enabled: false,
      onSuccess: onSuccessCallback,
      onError: onErrorCallback,
    }
  );

  console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading....</h2>;

  if (isError) return <h2>{error.message}</h2>;
  return (
    <Fragment>
      <h2>React Query Super Heroes Page</h2>
       {/*<button onClick={refetch}>Fetch Data</button>*/}
      {data && data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>;
      })}
      
    </Fragment>
  );
};

// refetchOnMount: boolean | "always" | ((query: Query) => boolean | "always")
// Optional
// Defaults to true
// If set to true, the query will refetch on mount if the data is stale.
// If set to false, the query will not refetch on mount.
// If set to "always", the query will always refetch on mount.
// If set to a function, the function will be executed with the query to compute the value


// refetchOnWindowFocus: boolean | "always" | ((query: Query) => boolean | "always")
// Optional
// Defaults to true
// If set to true, the query will refetch on window focus if the data is stale.
// If set to false, the query will not refetch on window focus.
// If set to "always", the query will always refetch on window focus.
// If set to a function, the function will be executed with the query to compute the value