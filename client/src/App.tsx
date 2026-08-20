import { Suspense, lazy } from 'react';
import { Center, Loader } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

import Layout from './layout/layout';

const AboutPage = lazy(() => import('./pages/about'));
const ErrorPage = lazy(() => import('./pages/error'));
const HomePage = lazy(() => import('./pages/home'));
const LoginPage = lazy(() => import('./pages/login'));
const MapPage = lazy(() => import('./pages/map'));
const QuantityCompanyPage = lazy(() => import('./pages/quantityCompany'));
const QuantityWaterSupplyPage = lazy(
    () => import('./pages/quantityWaterSupply'),
);
const SiteConfigPage = lazy(() => import('./pages/siteConfig'));
const LoggerConfigPage = lazy(() => import('./pages/loggerConfig'));
const ManualIndexPage = lazy(() => import('./pages/manualndex'));
const ManualQuantityPage = lazy(() => import('./pages/manualQuantity'));
const ChangeDataManualPage = lazy(() => import('./pages/changeDataManual'));
const StatisticSiteXNManager = lazy(
    () => import('./pages/statisticSiteXNManager'),
);
const CreateUserPage = lazy(() => import('./pages/createUser'));
const ChangePasswordPage = lazy(() => import('./pages/changePassword'));
const LoggerPage = lazy(() => import('./pages/logger'));
const MeterPage = lazy(() => import('./pages/meter'));
const TransmitterPage = lazy(() => import('./pages/transmiiter'));
const ChangeMeterPage = lazy(() => import('./pages/changeMeter'));
const ChangeTransmitterPage = lazy(() => import('./pages/changeTransmitter'));
const ChangeLoggerPage = lazy(() => import('./pages/changeLogger'));
const StatisticMarkSizePage = lazy(() => import('./pages/statictisMarkSize'));
const StatisticCustomChoiceSitePage = lazy(
    () => import('./pages/statisticCustomChoiceSite'),
);
const StatisticChangePeriodPage = lazy(
    () => import('./pages/statisticChangePeriod'),
);
const StatisticCustomChoiceMeterPage = lazy(
    () => import('./pages/staisticCustomChoiceMeter'),
);
const StatisticCustomChoiceTransmitterPage = lazy(
    () => import('./pages/statisticCustomChoiceTransmitter'),
);
const StatisticCustomChoiceLoggerPage = lazy(
    () => import('./pages/statisticCustomChoiceLogger'),
);
const StatisticHistorySitePage = lazy(
    () => import('./pages/statisticHistorySite'),
);
const StatisticAccreditationAndExpiryDatePage = lazy(
    () => import('./pages/statisticAccreditationAndExpiryDate'),
);
const StatisticKCoefficientByAreaPage = lazy(
    () => import('./pages/statisticKCoefficientByArea'),
);
const StatisticMeterInfoPage = lazy(
    () => import('./pages/statisticMeterInfo'),
);
const StatisticTransmitterInfoPage = lazy(
    () => import('./pages/statisticTransmitterInfo'),
);
const StatisticLoggerInfoPage = lazy(
    () => import('./pages/statisticLoggerInfo'),
);
const StatisticCustomChoiceMarkSizePage = lazy(
    () => import('./pages/statisticCustomeChoiceMarkSize'),
);
const StatisticMeterWorkPage = lazy(
    () => import('./pages/statisticMeterWork'),
);
const StatisticNotChangedMeterPage = lazy(
    () => import('./pages/statisticNotChangedMeter'),
);
const CoverPage = lazy(() => import('./pages/cover'));
const DownloadMeterFilePage = lazy(() => import('./pages/downloadMeterFile'));
const DeleteUselessMeterPage = lazy(
    () => import('./pages/deleteUselessMeter'),
);
const DeleteUselessTransmitterPage = lazy(
    () => import('./pages/deleteUselessTransmitter'),
);
const DeleteUselessLoggerPage = lazy(
    () => import('./pages/deleteUselessLogger'),
);
const DownloadSiteFilePage = lazy(() => import('./pages/downloadSiteFile'));
const QuantityGroupPage = lazy(() => import('./pages/quantityGroup'));
const QuantityGroup2Page = lazy(() => import('./pages/quantityGroup2'));
const QuantityGroup3Page = lazy(() => import('./pages/quantityGroup3'));
const QuantityGroup4Page = lazy(() => import('./pages/quantityGroup4'));
const QuantityGroup5Page = lazy(() => import('./pages/quantityGroup5'));
const QuantityLevelPage = lazy(() => import('./pages/quantityLevel'));
const QuantityTotalPage = lazy(() => import('./pages/quantityTotal'));
const ViewUserPage = lazy(() => import('./pages/viewUser'));
const StatisticHistoryMeterPage = lazy(
    () => import('./pages/statisticHistoryMeter'),
);
const FormPrinterPage = lazy(() => import('./pages/formPrinter'));
const CreateOtherData = lazy(() => import('./pages/createOtherData'));
const ActivityLogPage = lazy(() => import('./pages/activityLog'));

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
            {
                path: '/statisticMeterExpireTime',
                element: <StatisticAccreditationAndExpiryDatePage />,
            },
            {
                path: '/statisticKCoefficientByArea',
                element: <StatisticKCoefficientByAreaPage />,
            },
            {
                path: '/statisticMeterInfo',
                element: <StatisticMeterInfoPage />,
            },
            {
                path: '/statisticTransmitterInfo',
                element: <StatisticTransmitterInfoPage />,
            },
            {
                path: '/statisticLoggerInfo',
                element: <StatisticLoggerInfoPage />,
            },
            {
                path: '/statisticCustomChoiceMarkSize',
                element: <StatisticCustomChoiceMarkSizePage />,
            },
            {
                path: '/statisticMeterWork',
                element: <StatisticMeterWorkPage />,
            },
            {
                path: '/statisticNotChangedMeter',
                element: <StatisticNotChangedMeterPage />,
            },
            {
                path: '/cover',
                element: <CoverPage />,
            },
            {
                path: '/downloadMeterFile',
                element: <DownloadMeterFilePage />,
            },
            {
                path: '/deleteUselessMeter',
                element: <DeleteUselessMeterPage />,
            },
            {
                path: '/deleteUselessTransmitter',
                element: <DeleteUselessTransmitterPage />,
            },
            {
                path: '/deleteUselessLogger',
                element: <DeleteUselessLoggerPage />,
            },
            {
                path: '/downloadSiteFile',
                element: <DownloadSiteFilePage />,
            },
            {
                path: '/quantityGroup',
                element: <QuantityGroupPage />,
            },
            {
                path: '/quantityGroup2',
                element: <QuantityGroup2Page />,
            },
            {
                path: '/quantityGroup3',
                element: <QuantityGroup3Page />,
            },
            {
                path: '/quantityGroup4',
                element: <QuantityGroup4Page />,
            },
            {
                path: '/quantityGroup5',
                element: <QuantityGroup5Page />,
            },
            {
                path: '/quantityLevel',
                element: <QuantityLevelPage />,
            },
            {
                path: '/quantityTotal',
                element: <QuantityTotalPage />,
            },
            {
                path: '/viewUser',
                element: <ViewUserPage />,
            },
            {
                path: '/statisticHistoryMeter',
                element: <StatisticHistoryMeterPage />,
            },
            {
                path: '/formPrinter',
                element: <FormPrinterPage />,
            },
            {
                path: '/createOtherData',
                element: <CreateOtherData />,
            },
            {
                path: '/activityLog',
                element: <ActivityLogPage />,
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

function App() {
    return (
        <Suspense
            fallback={
                <Center h="100vh">
                    <Loader />
                </Center>
            }
        >
            <RouterProvider router={router} />
        </Suspense>
    );
}

export default App;
