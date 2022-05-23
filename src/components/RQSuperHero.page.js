import React,{ Fragment } from "react";
import { withRouter, useParams } from 'react-router-dom';
import { useSuperHeroData } from "./Hooks/useSuperHeroData";

export const RQSuperHeroPage = () => {
    const { heroId } = useParams()

    const { isLoading,isError,error,data } = useSuperHeroData(heroId)

    if (isLoading) return <h2>Loading....</h2>;

    if (isError) return <h2>{error.message}</h2>;


    return (
        <Fragment>
         {data && 
             <div>
              <h1>{data.data.name}</h1>
            </div>
        }
        </Fragment>
    )
}

export default withRouter(RQSuperHeroPage);