import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Accommodation from './pages/accommodation/Accommodation'
import About from './pages/about/About'
import Error from './pages/error/Error'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router = createBrowserRouter([
    {
        element: <Layout />, // J'utilise Layout comme wrapper pour les routes principales
        children: [
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
        ],
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