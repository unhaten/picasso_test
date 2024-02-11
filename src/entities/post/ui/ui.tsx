import { Box, Card as MUICard } from '@mui/material'
import IPost from '../types/IPost'
import { FC } from 'react'
import CardImagePlaceholder from '../../../shared/ui/cardImagePlaceholder'
import MoveToDetails from './components/moveToDetails'
import PostContent from './components/postContent'

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <Box
            width={1}
            height={{ xs: 450, lg: 420 }}
            overflow={'hidden'}
            position={'relative'}
            component={MUICard}
            display={{ xs: 'flex' }}
            flexDirection={{ xs: 'column' }}
            justifyContent={'space-between'}
            pb={3}
        >
            <Box>
                <CardImagePlaceholder />
                <PostContent title={post.title} body={post.body} id={post.id} />
            </Box>
            <MoveToDetails id={post.id} />
        </Box>
    )
}

export default Post
