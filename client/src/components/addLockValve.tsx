import { Col, Grid, Select } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import AddLockValveInterface from '../types/addLockValve.type';

import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import {
    AddLockValveState,
    deleteLockValve,
    updateSite,
} from '../features/addLockValve';
import { CurrentCompanyPreciousState } from '../features/currentCompanyPercious';

import { useGetSiteByWaterSupplyQuery } from '../__generated__/graphql';

import Site from '../types/site.type';

const AddLockValve = ({ index }: AddLockValveInterface) => {
    const [searchValue, onSearchChange] = useState('');
    const [siteid, setSiteId] = useState('');
    const [sitename, setSiteName] = useState('');

    const addLockValveState = useSelector(AddLockValveState);
    const currentCompanyPreciousState = useSelector(
        CurrentCompanyPreciousState,
    );

    const dispatch = useDispatch();

    const onCloseAddLockValveClicked = () => {
        dispatch(deleteLockValve(index));
    };

    const { data, error, loading } = useGetSiteByWaterSupplyQuery({
        variables: { company: currentCompanyPreciousState },
    });

    useEffect(() => {
        let lockValve = addLockValveState[index];
        //@ts-ignore
        onSearchChange(lockValve.Location);
        //@ts-ignore
        setSiteId(lockValve.SiteId);
        //@ts-ignore
        setSiteName(lockValve.Location);
    }, [addLockValveState[index]]);

    //@ts-ignore
    let tempDataSite = [];

    if (data != null && data != undefined) {
        if (
            data.GetSiteByWaterSupply != null &&
            data.GetSiteByWaterSupply != undefined
        ) {
            if (data.GetSiteByWaterSupply.length > 0) {
                for (let site of data.GetSiteByWaterSupply) {
                    let obj: Site = {
                        // @ts-ignore comment
                        value: site._id,
                        // @ts-ignore comment
                        label: `${site._id} - ${site.Location}`,
                    };

                    tempDataSite.push(obj);
                }
            }
        }
    }

    const onSelectSiteChanged = (e: any) => {
        if (e !== null) {
            setSiteId(e);

            if (tempDataSite.length > 0) {
                //@ts-ignore
                let find = tempDataSite.find((el) => el.value === e);
                if (find !== undefined) {
                    setSiteName(find.label);

                    let obj = {
                        index: index,
                        SiteId: e,
                        Location: find.label,
                    };
                    // @ts-ignore
                    dispatch(updateSite(obj));
                }
            }
        } else {
            let obj = {
                index: index,
                SiteId: '',
                Location: '',
            };
            // @ts-ignore
            dispatch(updateSite(obj));
        }
    };

    return (
        <Grid>
            <Col span={11}>
                <Select
                    placeholder="Chọn vị trí"
                    searchable
                    value={siteid}
                    nothingFound="Không tìm thấy"
                    data={tempDataSite}
                    clearable
                    onChange={onSelectSiteChanged}
                />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddLockValveClicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddLockValve;
