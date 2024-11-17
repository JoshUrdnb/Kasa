import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Home from './pages/home/Home'
import Accommodation from './pages/accommodation/Accommodation'
import About from './pages/about/About'
import Error from './pages/error/Error'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/accommodation/:id" element={<Accommodation />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App