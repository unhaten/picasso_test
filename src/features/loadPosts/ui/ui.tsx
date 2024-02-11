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
                    <Skeleton variant="rounded" width={350} height={140} />
                    <Skeleton variant="rectangular" width={350} height={60} />
                    <Skeleton variant="rounded" width={350} height={120} />
                </Stack>
            ))}
        </>
    )
}

export default LoadPosts
