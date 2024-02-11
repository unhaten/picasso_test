import { Container, Typography } from '@mui/material'
import s from './style.module.scss'

const Footer = () => {
    return (
        <footer className={s.footer}>
            <Container>
                <Typography variant="subtitle2" align="center">
                    @все права защищены
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer
