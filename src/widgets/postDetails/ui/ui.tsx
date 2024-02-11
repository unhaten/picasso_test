import { FC } from 'react'
import IPost from '../../../entities/post/types/IPost'
import { Box, Divider, Paper, Typography } from '@mui/material'

interface PostDetailsProps {
    post: IPost
}

const PostDetails: FC<PostDetailsProps> = ({ post }) => {
    return (
        <>
            <Box component={Paper} my={10} p={5} maxWidth={600} mx={'auto'}>
                <Typography align="center" variant="h6">
                    {post.title}
                </Typography>
                <Divider sx={{ my: 3 }} color={'error.main'} />
                <Typography>{post.body}</Typography>
            </Box>
        </>
    )
}

export default PostDetails
