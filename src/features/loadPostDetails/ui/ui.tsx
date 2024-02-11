import { Skeleton, Stack } from '@mui/material'

const LoadPostDetails = () => {
    return (
        <Stack
            spacing={1}
            sx={{ display: 'block', mx: 'auto', my: 5, width: 'fit-content' }}
        >
            <Skeleton variant="rounded" width={600} height={140} />
            <Skeleton variant="rectangular" width={600} height={60} />
            <Skeleton variant="rounded" width={600} height={120} />
        </Stack>
    )
}

export default LoadPostDetails
