import { Tabs } from '@mantine/core';

import InstallLevel from '../components/installLevel';
import SiteGroup from '../components/siteGroup';
import SiteGroup2S from '../components/siteGroup2S';
import SiteGroup3S from '../components/siteGroup3S';
import SiteGroup4S from '../components/siteGroup4S';
import SiteGroup5S from '../components/siteGroup5S';
import SiteCompany from '../components/siteCompany';
import SiteStatus from '../components/siteStatus';
import SiteAvailability from '../components/siteAvailability';
import DeviceStatus from '../components/deviceStatus';
import MeterAccreditationType from '../components/meterAccreditaionType';
import UserRole from '../components/userRole';
import UserStaff from '../components/userStaff';

const CreateOtherData = () => {
    return (
        <Tabs defaultValue="installLevel">
            <Tabs.List>
                <Tabs.Tab value="installLevel">Cấp điểm lắp đặt</Tabs.Tab>
                <Tabs.Tab value="installGroup">Nhóm điểm lắp đặt</Tabs.Tab>
                <Tabs.Tab value="installGroup2">Nhóm điểm lắp đặt 2</Tabs.Tab>
                <Tabs.Tab value="installGroup3">Nhóm điểm lắp đặt 3</Tabs.Tab>
                <Tabs.Tab value="installGroup4">Nhóm điểm lắp đặt 4</Tabs.Tab>
                <Tabs.Tab value="installGroup5">Nhóm điểm lắp đặt 5</Tabs.Tab>
                <Tabs.Tab value="manage">Quản lý</Tabs.Tab>
                <Tabs.Tab value="siteStatus">Trạng thái điểm lắp đặt</Tabs.Tab>
                <Tabs.Tab value="siteAvailable">
                    Tình trạng điểm lắp đặt
                </Tabs.Tab>
                <Tabs.Tab value="deviceStatus">Tình trạng thiết bị</Tabs.Tab>
                <Tabs.Tab value="accreditationType">Loại kiểm định</Tabs.Tab>
                <Tabs.Tab value="userRole">Quyền sử dụng</Tabs.Tab>
                <Tabs.Tab value="userStaff">Nhân viên</Tabs.Tab>
            </Tabs.List>
            <Tabs.Panel value="installLevel" pt="xs">
                <InstallLevel />
            </Tabs.Panel>
            <Tabs.Panel value="installGroup" pt="xs">
                <SiteGroup />
            </Tabs.Panel>
            <Tabs.Panel value="installGroup2" pt="xs">
                <SiteGroup2S />
            </Tabs.Panel>
            <Tabs.Panel value="installGroup3" pt="xs">
                <SiteGroup3S />
            </Tabs.Panel>
            <Tabs.Panel value="installGroup4" pt="xs">
                <SiteGroup4S />
            </Tabs.Panel>
            <Tabs.Panel value="installGroup5" pt="xs">
                <SiteGroup5S />
            </Tabs.Panel>
            <Tabs.Panel value="manage" pt="xs">
                <SiteCompany />
            </Tabs.Panel>
            <Tabs.Panel value="siteStatus" pt="xs">
                <SiteStatus />
            </Tabs.Panel>
            <Tabs.Panel value="siteAvailable" pt="xs">
                <SiteAvailability />
            </Tabs.Panel>
            <Tabs.Panel value="deviceStatus" pt="xs">
                <DeviceStatus />
            </Tabs.Panel>
            <Tabs.Panel value="accreditationType" pt="xs">
                <MeterAccreditationType />
            </Tabs.Panel>
            <Tabs.Panel value="userRole" pt="xs">
                <UserRole />
            </Tabs.Panel>
            <Tabs.Panel value="userStaff" pt="xs">
                <UserStaff />
            </Tabs.Panel>
        </Tabs>
    );
};

export default CreateOtherData;
