import { List, ListItem, Box } from '@mui/material'
import { postApi } from '../../../entities/post/model/services/post.service'
import Post from '../../../entities/post'
import { useEffect, useState } from 'react'
import LoadPosts from '../../../features/loadPosts'

const CardList = () => {
    const [limit, setLimit] = useState(7)
    const [isScrollingDown, setIsScrollingDown] = useState(false)
    const [isExtraLoading, setIsExtraLoading] = useState(false)

    const { data, isLoading, isFetching } = postApi.useFetchAllPostsQuery({
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
        if (e.target.documentElement.scrollTop < 50) {
            return
        }
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
        }
    }

    return (
        <>
            <Box component={List} display="flex" flexWrap="wrap" rowGap={2}>
                {data?.map((item) => (
                    <ListItem
                        key={item.id}
                        sx={{ flexBasis: '33.333333%' }}
                    >
                        <Post post={item} />
                    </ListItem>
                ))}
                {isLoading && <LoadPosts amount={7} />}
                {isExtraLoading && isFetching && <LoadPosts amount={7} />}
            </Box>
        </>
    )
}

export default CardList
