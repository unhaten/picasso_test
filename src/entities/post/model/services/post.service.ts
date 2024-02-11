import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import IPost from '../../types/IPost'

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], { limit: number }>({
            query: ({ limit = 5 }) => ({
                url: '/posts',
                params: {
                    _limit: limit
                }
            }),
            providesTags: ['Post']
        }),
        fetchPostById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`
            })
        })
    })
})
