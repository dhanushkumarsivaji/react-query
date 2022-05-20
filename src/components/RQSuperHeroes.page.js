import { useQuery } from 'react-query';
import axios from 'axios';
import { Fragment } from 'react/cjs/react.production.min';

const fetchSuperHeros = ()  => {
  return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heros',fetchSuperHeros)

  if(isLoading) return <h2>Loading....</h2>
  return (
    <Fragment>
      <h2>React Query Super Heroes Page</h2>
      {data.data.map((hero) => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </Fragment>
    )
}
