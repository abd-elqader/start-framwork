
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import Layout from './Component/Layout/Layout';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import '../node_modules/@fortawesome/fontawesome-free/css/all.css';

function App() {

  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/portfolio",
          element: <Portfolio />
        },
        {
          path: "/contact",
          element: <Contact/>
        }
      ],
    },
    {
      path: "*",
      element: <div>404</div>
    }
  ])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
