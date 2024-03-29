import { Col, Grid, NumberInput, Select, Text } from '@mantine/core';
import { IconX } from '@tabler/icons-react';

import { useEffect, useState } from 'react';

import AddIndexInterface from '../types/addIndex.type';

import addIndex, {
    AddIndexState,
    deleteIndex,
    updateNextPeriodIndex,
    updatePreviousPeriodIndex,
    updateSite,
} from '../features/addIndex';

import { useGetSiteByWaterSupplyQuery } from '../__generated__/graphql';

import { useDispatch, useSelector } from 'react-redux';

import { CurrentCompanyPreciousState } from '../features/currentCompanyPercious';

import Site from '../types/site.type';

const AddIndex = ({ index }: AddIndexInterface) => {
    const [searchValue, onSearchChange] = useState('');
    const [prevIndex, setPrevIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(0);
    const [siteid, setSiteId] = useState('');
    const [sitename, setSiteName] = useState('');

    const addIndexState = useSelector(AddIndexState);
    const currentCompanyPreciousState = useSelector(
        CurrentCompanyPreciousState,
    );

    const dispatch = useDispatch();

    useEffect(() => {
        let addIndex = addIndexState[index];

        //@ts-ignore
        onSearchChange(addIndex.Location);
        //@ts-ignore
        setSiteId(addIndex.SiteId);
        //@ts-ignore
        setSiteName(addIndex.Location);
        //@ts-ignore
        setPrevIndex(addIndex.PreviousPeriodIndex);
        //@ts-ignore
        setNextIndex(addIndex.NextPeriodIndex);
    }, [addIndexState[index]]);

    const onCloseAddIndexClicked = () => {
        dispatch(deleteIndex(index));
    };

    const { data, error, loading } = useGetSiteByWaterSupplyQuery({
        variables: { company: currentCompanyPreciousState },
    });

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

    const onPreviosIndexBlured = (e: any) => {
        let number = '';
        if (e.target.value !== '') {
            // @ts-ignore
            number = parseInt(e.target.value);
        } else {
            number = '';
        }
        let obj = {
            index: index,
            PreviousPeriodIndex: number,
        };
        //@ts-ignore
        setPrevIndex(number);

        // @ts-ignore
        dispatch(updatePreviousPeriodIndex(obj));
    };

    const onNextIndexBlured = (e: any) => {
        let number = '';
        if (e.target.value !== '') {
            // @ts-ignore
            number = parseInt(e.target.value);
        } else {
            number = '';
        }
        let obj = {
            index: index,
            NextPeriodIndex: number,
        };
        //@ts-ignore
        setNextIndex(number);
        // @ts-ignore
        dispatch(updateNextPeriodIndex(obj));
    };

    return (
        <Grid>
            <Col span={5}>
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
            <Col span={3}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    // @ts-ignore
                    value={prevIndex}
                    onBlur={onPreviosIndexBlured}
                />
            </Col>
            <Col span={3}>
                <NumberInput
                    decimalSeparator=","
                    thousandsSeparator="."
                    // @ts-ignore
                    value={nextIndex}
                    onBlur={onNextIndexBlured}
                />
            </Col>
            <Col span={1}>
                <IconX
                    color="red"
                    size="1.5rem"
                    style={{ cursor: 'pointer' }}
                    onClick={onCloseAddIndexClicked}
                ></IconX>
            </Col>
        </Grid>
    );
};

export default AddIndex;
