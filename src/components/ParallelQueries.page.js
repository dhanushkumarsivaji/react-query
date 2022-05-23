import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSuperHeros = () => {
    return axios.get("http://localhost:4000/superheroes")
}

const fetchFriends = () => {
    return axios.get("http://localhost:4000/friends")
}

export const ParallelQueries = () => {
    useQuery('super-heroes'.fetchSuperHeros)
    useQuery('friends'.fetchFriends)
  return (
    <div>ParallelQueries.page</div>
  )
};