import { List, ListItem, Box, Skeleton, Stack } from '@mui/material'
import { postApi } from '../../../entities/post/model/services/post.service'
import Post from '../../../entities/post'
import { useEffect, useState } from 'react'

const CardList = () => {
    const [limit, setLimit] = useState(7)
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    const [isExtraLoading, setIsExtraLoading] = useState(false)

    const { data, isLoading } = postApi.useFetchAllPostsQuery({
        limit: limit
        // pollingInterval: 5000
    })

    useEffect(() => {
        if (isScrollingDown) {
            setLimit((prev) => {
                return prev + 6
            })
            setIsScrollingDown(false)
        }
    }, [isScrollingDown])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return () => {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    const scrollHandler = (e: any): void => {
        // if (e.target.documentElement.scrollTop < 50) {
        //     return
        // }
        if (
            e.target.documentElement.scrollHeight -
                e.target.documentElement.scrollTop -
                window.innerHeight <
            50
        ) {
            setIsScrollingDown(true)
            setIsExtraLoading(true)
            window.scrollTo(
                0,
                e.target.documentElement.scrollHeight +
                    e.target.documentElement.scrollTop
            )
            setTimeout(() => {
                setIsExtraLoading(false)
            }, 500)
        }
    }

    return (
        <>
            <Box component={List} display="flex" flexWrap="wrap" rowGap={2}>
                {data?.map((item) => (
                    <ListItem key={item.id} sx={{ flexBasis: '33.333333%' }}>
                        <Post post={item} />
                    </ListItem>
                ))}
                {isLoading &&
                    [1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <Stack spacing={1} sx={{ mx: 2 }}>
                            <Skeleton
                                variant="rectangular"
                                width={350}
                                height={118}
                            />
                            <Skeleton
                                variant="rectangular"
                                width={350}
                                height={20}
                            />
                            <Skeleton
                                variant="rounded"
                                width={350}
                                height={60}
                            />
                        </Stack>
                    ))}

                {isExtraLoading &&
                    [1, 2, 3, 4, 5, 6, 7].map((item) => (
                        <Stack spacing={1} sx={{ mx: 2 }}>
                            <Skeleton
                                variant="rounded"
                                width={350}
                                height={140}
                            />
                            <Skeleton
                                variant="rectangular"
                                width={350}
                                height={60}
                            />
                            <Skeleton
                                variant="rounded"
                                width={350}
                                height={120}
                            />
                        </Stack>
                    ))}
            </Box>
        </>
    )
}

export default CardList
