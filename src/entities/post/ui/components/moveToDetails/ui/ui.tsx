import { Box, Button } from '@mui/material'
import { FC } from 'react'
import { Link } from 'react-router-dom'

interface MoveToDetailsProps {
    id: number
}

const MoveToDetails: FC<MoveToDetailsProps> = ({ id }) => {
    return (
        <Box px={2} mt={1.5}>
            <Button
                component={Link}
                to={id.toString()}
                variant="contained"
                sx={{
                    display: 'block',
                    mx: 'auto',
                    width: 'fit-content',
                    fontWeight: 600
                }}
            >
                <span>Просмотр</span>
            </Button>
        </Box>
    )
}

export default MoveToDetails
