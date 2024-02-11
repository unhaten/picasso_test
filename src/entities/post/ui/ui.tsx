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
            height={360}
            overflow={'hidden'}
            position={'relative'}
            component={MUICard}
        >
            <CardImagePlaceholder />
            <PostContent title={post.title} body={post.body} id={post.id} />
            <MoveToDetails id={post.id} />
        </Box>
    )
}

export default Post
