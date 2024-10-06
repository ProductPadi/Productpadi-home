import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/general/Home'
import About from './pages/general/About'
import HomeLayout from './components/layout/HomeLayout'
import PageNotFound from './pages/general/PageNotFound'

// pages

const routes = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])

export default routes