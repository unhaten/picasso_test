import { useParams } from 'react-router-dom'
import { postApi } from '../../../entities/post/model/services/post.service'
import PostDetails from '../../../widgets/postDetails'
import LoadPostDetails from '../../../features/loadPostDetails'
import NavigateBack from '../../../features/navigateBack'

const PostDetailsPage = () => {
    const { id } = useParams()

    const { data, isLoading } = postApi.useFetchPostByIdQuery(Number(id))

    return (
        <>
            <NavigateBack />
            {data && <PostDetails post={data} />}
            {isLoading && <LoadPostDetails />}
        </>
    )
}

export default PostDetailsPage
