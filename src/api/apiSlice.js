import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: build => ({
        getHeroes: build.query({
            query: ()=> '/heroes'
        })
    })
})

export const {useGetHeroesQuery} = apiSlice;