import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'

const NavigateBack = () => {
    const navigate = useNavigate()

    return (
        <Box>
            <Button onClick={() => navigate(-1)} variant="outlined">
                <KeyboardBackspaceIcon sx={{ mr: 0.5 }} />
                <span>Назад</span>
            </Button>
        </Box>
    )
}

export default NavigateBack
