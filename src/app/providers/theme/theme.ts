import { createTheme, responsiveFontSizes } from '@mui/material'

let theme = createTheme({
    typography: {
        fontFamily: ['Poppins', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'].join(',')
    }
})

console.log(theme)

theme = responsiveFontSizes(theme)

export default theme
