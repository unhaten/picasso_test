import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    Link
} from 'react-router-dom'
import HomePage from '../../../pages/home'
import { paths } from '../../../shared/config/routes/paths'
import Layout from '../../../widgets/layout'
import PostDetailsPage from '../../../pages/postDetails'

// console.log(window.location.pathname);
export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path={paths.index} element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path={paths.details} element={<PostDetailsPage />} />
            </Route>
            <Route
                path={paths.notFound}
                element={
                    <>
                        not found, <Link to="/">go home</Link>
                    </>
                }
            />
        </>
    )
)

// return <RouterProvider router={router}></RouterProvider>
