// import { useState } from 'react';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { useSuperHerosData } from './Hooks/useSuperHerosData';

export const RQSuperHeroesPage = () => {
  // const [poolTime, setPooltime] = useState(3000)


  const onSuccessCallback = (data) => {
    console.log("On Success Callback Is Called",data)
    // if(data && data.data.length === 4){
    //   setPooltime(false)
    // }
  } 

  const onErrorCallback = (data) => {
    console.log("On Success Callback Is Called",data)
  } 


  const { isLoading, data, isError, error, isFetching, refetch } = useSuperHerosData(onSuccessCallback,onErrorCallback)

  // console.log({ isLoading, isFetching });

  if (isLoading) return <h2>Loading....</h2>;

  if (isError) return <h2>{error.message}</h2>;
  return (
    <Fragment>
      <h2>React Query Super Heroes Page</h2>
       {/*<button onClick={refetch}>Fetch Data</button>*/}
      {data && data.data.map((hero) => {
        return <div key={hero.id}>
        <Link to={`/rq-super-heroes/${hero.id}`}>{hero.name}</Link>
        </div>;
      })}
      {/*data && data.map((heroName) =><div key={heroName}>{heroName}</div> )*/}
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