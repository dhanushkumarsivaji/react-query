import React,{ Fragment } from "react";
import { useQueries, useQuery } from "react-query";
import axios from "axios";

const fetchUserByEmail = (email) => {
    return axios.get(`http://localhost:4000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId) => {
    return axios.get(`http://localhost:4000/channels/${channelId}`)
}

export const DependentQueries = ({email}) => {
    const { data: user } = useQuery(['users',email],() => fetchUserByEmail(email))

    const channelId = user?.data.channelId

    useQuery(['courses',channelId], () => fetchCoursesByChannelId(channelId),{
        enabled: !!channelId,
    })
    
    return (
        <Fragment>
            <h1>DependentQueries</h1>
        </Fragment>
    )
}