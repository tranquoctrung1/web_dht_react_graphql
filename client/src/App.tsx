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
import SiteConfigPage from './pages/siteConfig';
import LoggerConfigPage from './pages/loggerConfig';
import ManualIndexPage from './pages/manualndex';
import ManualQuantityPage from './pages/manualQuantity';
import ChangeDataManualPage from './pages/changeDataManual';
import StatisticSiteXNManager from './pages/statisticSiteXNManager';

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
                    path: '/siteConfig',
                    element: <SiteConfigPage />,
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
                {
                    path: '/loggerConfig',
                    element: <LoggerConfigPage />,
                },
                {
                    path: '/indexManual',
                    element: <ManualIndexPage />,
                },
                {
                    path: '/quantityManual',
                    element: <ManualQuantityPage />,
                },
                {
                    path: '/dataManualChanged',
                    element: <ChangeDataManualPage />,
                },
                {
                    path: '/statisticSite',
                    element: <StatisticSiteXNManager />,
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
