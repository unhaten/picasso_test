import { CardMedia } from '@mui/material'

const CardImagePlaceholder = () => {
    return (
        <CardMedia
            component="img"
            height="140"
            image="https://bt-remont.ru/local/img/noimg.jpg"
            loading="lazy"
            alt="image"
            sx={{
                maxWidth: '400px',
                margin: '0 auto'
            }}
        />
    )
}

export default CardImagePlaceholder
