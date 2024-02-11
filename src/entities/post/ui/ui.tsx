import {
    Box,
    CardContent,
    CardMedia,
    Card as MUICard,
    CardActionArea,
    Typography,
    Divider,
    Button
} from '@mui/material'
import IPost from '../types/IPost'
import { FC } from 'react'

interface PostProps {
    post: IPost
}

const Post: FC<PostProps> = ({ post }) => {
    return (
        <Box width={1} height={330} overflow={'hidden'} component={MUICard}>
            <CardActionArea
                sx={{
                    width: 'inherit',
                    height: 'inherit',
                    position: 'relative',
                    zIndex: 2
                }}
            >
                <Box sx={{ width: 1, height: 1 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://bt-remont.ru/local/img/noimg.jpg"
                        loading="lazy"
                        alt="image"
                    />
                    <CardContent sx={{ pb: 0.5 }}>
                        <Typography gutterBottom variant="h6" component="h3">
                            {post.title.length > 20
                                ? post.title.substring(0, 30) + '...'
                                : post.title}
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Typography variant="body2" color="text.secondary">
                            {post.body.length > 20
                                ? post.body.substring(0, 120) + '...'
                                : post.body}
                        </Typography>
                    </CardContent>
                    <Box px={2}>
                        <Button
                            variant="contained"
                            sx={{
                                ml: 'auto',
                                display: 'block'
                            }}
                        >
                            <span>more</span>
                        </Button>
                    </Box>
                </Box>
            </CardActionArea>
        </Box>
    )
}

export default Post
