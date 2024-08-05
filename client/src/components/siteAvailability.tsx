import {
    Grid,
    Col,
    Select,
    Button,
    Space,
    Center,
    Textarea,
} from '@mantine/core';

import { useState, useEffect } from 'react';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllSiteAvailabilitiesLazyQuery,
    useInsertSiteAvailabilityMutation,
    useUpdateSiteAvailabilityMutation,
    useDeleteSiteAvailabilityMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const SiteAvailability = () => {
    const [siteAvai, setSiteAvai] = useState([]);
    const [siteAvaiData, setSiteAvaiData] = useState([]);

    const [getSiteAvai] = useGetAllSiteAvailabilitiesLazyQuery();
    const [insertSiteAvai] = useInsertSiteAvailabilityMutation();
    const [updateSiteAvai] = useUpdateSiteAvailabilityMutation();
    const [deleteSiteAvai] = useDeleteSiteAvailabilityMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            Availability: '',
            Description: '',
        },
    });

    useEffect(() => {
        getSiteAvai()
            .then((res) => {
                if (res?.data?.GetAllSiteAvailabilities) {
                    const temp = [];
                    for (const item of res.data?.GetAllSiteAvailabilities) {
                        const obj = {
                            value: item?.Availability,
                            label: `${item?.Availability} | ${item?.Description}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setSiteAvaiData([...temp]);

                    //@ts-ignore
                    setSiteAvai([...res.data.GetAllSiteAvailabilities]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseSiteAvai = (e: any) => {
        const find = siteAvai.find(
            //@ts-ignore
            (el) => el.Availability === e.target.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Availability', find.Availability);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsertSisteAvai = (formValue: any) => {
        const obj = {
            Availability: formValue.Availability,
            Description: formValue.Description,
        };

        return obj;
    };

    const handleInsertSiteAvai = (formValue: any) => {
        //@ts-ignore
        setSiteAvai((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Availability === null ||
            formValue.Availability === undefined ||
            formValue.Availability === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có tình trạng điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsertSisteAvai(formValue);

            insertSiteAvai({
                variables: {
                    available: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertSiteAvailability) {
                        if (res.data.InsertSiteAvailability !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm tình trạng điểm lắp đặt thành công',
                            });
                            setValue('_id', res.data.InsertSiteAvailability);

                            handleInsertSiteAvai(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm tình trạng điểm lắp đặt không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm tình trạng điểm lắp đặt không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm tình trạng điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleUpdateSiteAvai = (formValue: any) => {
        const temp = [];

        for (const item of siteAvai) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setSiteAvai([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Availability === null ||
            formValue.Availability === undefined ||
            formValue.Availability === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có tình trạng điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateSiteAvai({
                variables: {
                    available: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateSiteAvailability) {
                        if (res.data.UpdateSiteAvailability > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật tình trạng điểm lắp đặt thành công',
                            });

                            handleUpdateSiteAvai(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật tình trạng điểm lắp đặt không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật tình trạng điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleDeleteSiteAvai = (formValue: any) => {
        const filter = siteAvai.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterData = siteAvaiData.filter(
            //@ts-ignore
            (el) => el.value !== formValue.Availability,
        );

        //@ts-ignore
        setSiteAvaiData([...filterData]);
        //@ts-ignore
        setSiteAvai([...filter]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa tình trạng điểm lắp đặt?',
            text: 'Xóa tình trạng điểm lắp đặt không thể nào hồi phục lại!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xóa',
            cancelButtonText: 'Hủy',
        }).then((result) => {
            if (result.isConfirmed) {
                const formValue = getValues();

                let isAllow = true;

                if (
                    formValue.Availability === null ||
                    formValue.Availability === undefined ||
                    formValue.Availability === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có tình trạng điểm lắp đặt',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteSiteAvai({
                        variables: {
                            available: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteSiteAvailability) {
                                if (res.data.DeleteSiteAvailability > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa tình trạng điểm lắp đặt thành công',
                                    });

                                    handleDeleteSiteAvai(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa tình trạng điểm lắp đặt không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa tình trạng điểm lắp đặt không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {siteAvaiData != undefined ? (
                    <Controller
                        name="Availability"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Tình trạng điểm lắp đặt"
                                //@ts-ignore
                                data={siteAvaiData}
                                placeholder="Tình trạng điểm lắp đặt"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo Tình trạng điểm lắp đặt: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setSiteAvaiData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseSiteAvai}
                            />
                        )}
                    ></Controller>
                ) : null}
            </Col>
            <Col md={6}>
                <Controller
                    name="Description"
                    control={control}
                    render={({ field }) => (
                        <Textarea
                            placeholder="Ghi chú"
                            label="Ghi chú"
                            autosize
                            minRows={2}
                            maxRows={4}
                            {...field}
                        />
                    )}
                ></Controller>
            </Col>
            <Col span={12}>
                <Center>
                    <Button
                        variant="filled"
                        color="green"
                        onClick={onInsertClicked}
                    >
                        Thêm
                    </Button>
                    <Space w="md"></Space>
                    <Button
                        variant="filled"
                        color="blue"
                        onClick={onUpdateClicked}
                    >
                        Sửa
                    </Button>
                    <Space w="md"></Space>
                    <Button
                        variant="filled"
                        color="red"
                        onClick={onDeleteClicked}
                    >
                        Xóa
                    </Button>
                </Center>
            </Col>
        </Grid>
    );
};

export default SiteAvailability;
