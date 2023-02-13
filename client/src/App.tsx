import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Layout from './layout/layout';

import AboutPage from './pages/about';
import ErrorPage from './pages/error';
import HomePage from './pages/home';
import LoginPage from './pages/login';
import MapPage from './pages/map';
import QuantityCompanyPage from './pages/quantityCompany';
import QuantityWaterSupplyPage from './pages/quantityWaterSupply';

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Layout />,
            children: [
                {
                    path: '',
                    element: <HomePage />,
                },
                {
                    path: '/map',
                    element: <MapPage />,
                },
                {
                    path: '/quantityCompany',
                    element: <QuantityCompanyPage />,
                },
                {
                    path: '/quantityCompanyWaterSupply',
                    element: <QuantityWaterSupplyPage />,
                },
            ],
        },
        {
            path: '/about',
            element: <AboutPage />,
        },
        {
            path: '*',
            element: <ErrorPage />,
        },
        {
            path: '/login',
            element: <LoginPage />,
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
