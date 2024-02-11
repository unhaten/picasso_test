import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/providers/router/Router'
import { ThemeProvider } from '@mui/material'
import theme from './app/providers/theme/theme'
import StoreProvider from './app/providers/store'
import './app/styles/global.scss'
import './app/styles/normalize.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <StoreProvider>
                <RouterProvider router={router} />
            </StoreProvider>
        </ThemeProvider>
    </React.StrictMode>
)
