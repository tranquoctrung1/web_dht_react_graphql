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
import CreateUserPage from './pages/createUser';
import ChangePasswordPage from './pages/changePassword';
import LoggerPage from './pages/logger';
import MeterPage from './pages/meter';
import TransmitterPage from './pages/transmiiter';
import ChangeMeterPage from './pages/changeMeter';
import ChangeTransmitterPage from './pages/changeTransmitter';
import ChangeLoggerPage from './pages/changeLogger';
import StatisticMarkSizePage from './pages/statictisMarkSize';
import StatisticCustomChoiceSitePage from './pages/statisticCustomChoiceSite';
import StatisticChangePeriodPage from './pages/statisticChangePeriod';
import StatisticCustomChoiceMeterPage from './pages/staisticCustomChoiceMeter';
import StatisticCustomChoiceTransmitterPage from './pages/statisticCustomChoiceTransmitter';
import StatisticCustomChoiceLoggerPage from './pages/statisticCustomChoiceLogger';
import StatisticHistorySitePage from './pages/statisticHistorySite';

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
                {
                    path: '/createUser',
                    element: <CreateUserPage />,
                },
                {
                    path: '/changePassword',
                    element: <ChangePasswordPage />,
                },
                {
                    path: '/logger',
                    element: <LoggerPage />,
                },
                {
                    path: '/meter',
                    element: <MeterPage />,
                },
                {
                    path: '/transmitter',
                    element: <TransmitterPage />,
                },
                {
                    path: '/meterChanged',
                    element: <ChangeMeterPage />,
                },
                {
                    path: '/transmitterChanged',
                    element: <ChangeTransmitterPage />,
                },
                {
                    path: '/loggerChanged',
                    element: <ChangeLoggerPage />,
                },
                {
                    path: '/statisticMarkSize',
                    element: <StatisticMarkSizePage />,
                },
                {
                    path: '/statisticCustomChoiceSite',
                    element: <StatisticCustomChoiceSitePage />,
                },
                {
                    path: '/statisticChangePeriod',
                    element: <StatisticChangePeriodPage />,
                },
                {
                    path: '/statisticCustomChoiceMeter',
                    element: <StatisticCustomChoiceMeterPage />,
                },
                {
                    path: '/statisticCustomChoiceTransmitter',
                    element: <StatisticCustomChoiceTransmitterPage />,
                },
                {
                    path: '/statisticCustomChoiceLogger',
                    element: <StatisticCustomChoiceLoggerPage />,
                },
                {
                    path: '/statisticHistorySite',
                    element: <StatisticHistorySitePage />,
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
