import { Stack, Skeleton } from '@mui/material'
import { FC } from 'react'

interface LoadPostsProps {
    amount: number
}

const LoadPosts: FC<LoadPostsProps> = ({ amount }) => {
    const array = Array(amount).fill('a')

    return (
        <>
            {array.map((_item: string, index) => (
                <Stack spacing={1} sx={{ mx: 2 }} key={index}>
                    <Skeleton
                        variant="rounded"
                        height={140}
                        sx={{
                            width: { xs: '300px', md: '350px' }
                        }}
                    />
                    <Skeleton
                        variant="rectangular"
                        sx={{
                            width: { xs: '300px', md: '350px' }
                        }}
                        height={60}
                    />
                    <Skeleton
                        variant="rounded"
                        sx={{
                            width: { xs: '300px', md: '350px' }
                        }}
                        height={120}
                    />
                </Stack>
            ))}
        </>
    )
}

export default LoadPosts
