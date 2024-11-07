import Home from './pages/home/Home'
import Accommodation from './pages/accommodation/Accommodation'
import About from './pages/about/About'
import Error from './pages/error/Error'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
	{
        path: "/accommodation/:id",
        element: <Accommodation />,
    },
	{
        path: "/about",
        element: <About />,
    },
	{
        path: "*",
        element: <Error />,
    },
])

function App() {
	return (
		<div>
			<RouterProvider router={router} />
		</div>
	)
}

export default App