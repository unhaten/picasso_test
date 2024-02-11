import { CardContent, Typography, Divider } from '@mui/material'
import { FC } from 'react'

interface PostContentProps {
    title: string
    body: string
    id: number
}

const PostContent: FC<PostContentProps> = ({ title, body, id }) => {
    return (
        <CardContent sx={{ pb: 0.5 }}>
            <Typography gutterBottom variant="h6" component="h3">
                {title.length > 20 ? title.substring(0, 25) + '...' : title}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1" color="text.secondary">
                {body.length > 20 ? body.substring(0, 110) + '...' : body}
            </Typography>
            <Typography
                variant="caption"
                sx={{
                    position: 'absolute',
                    right: '15px',
                    bottom: '10px'
                }}
            >
                {id}
            </Typography>
        </CardContent>
    )
}

export default PostContent
