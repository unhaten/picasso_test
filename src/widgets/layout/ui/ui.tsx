import { CssBaseline, Box, Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Header from '../../header'
import Footer from '../../footer'
import s from './style.module.scss'

const Layout = () => {
    return (
        <>
            <div className={s.container}>
                <CssBaseline />
                <Header />
                <Box component="main" display="flex">
                    <Box marginTop={'50px'} width="100%">
                        <Container>
                            <Outlet />
                        </Container>
                    </Box>
                </Box>
                <Footer />
            </div>
        </>
    )
}

export default Layout
