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
    useGetAllSiteGroup3SLazyQuery,
    useInsertSiteGroup3SMutation,
    useUpdateSiteGroup3SMutation,
    useDeleteSiteGroup3SMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const SiteGroup3S = () => {
    const [siteGroup, setSiteGroup] = useState([]);
    const [siteGroupData, setSiteGroupData] = useState([]);

    const [getSiteGroup] = useGetAllSiteGroup3SLazyQuery();
    const [insertSiteGroup] = useInsertSiteGroup3SMutation();
    const [updateSiteGroup] = useUpdateSiteGroup3SMutation();
    const [deleteSiteGroup] = useDeleteSiteGroup3SMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            Group: '',
            Description: '',
        },
    });

    useEffect(() => {
        getSiteGroup()
            .then((res) => {
                if (res?.data?.GetAllSiteGroup3S) {
                    const temp = [];
                    for (const item of res.data.GetAllSiteGroup3S) {
                        const obj = {
                            value: item?.Group,
                            label: item?.Group,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setSiteGroupData([...temp]);

                    //@ts-ignore
                    setSiteGroup([...res.data.GetAllSiteGroup3S]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseSiteGroup = (e: any) => {
        //@ts-ignore
        const find = siteGroup.find((el) => el.Group === e.target.value);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Group', find.Group);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsertSisteGroup = (formValue: any) => {
        const obj = {
            Group: formValue.Group,
            Description: formValue.Description,
        };

        return obj;
    };

    const handleInsertSiteGroup = (formValue: any) => {
        //@ts-ignore
        setSiteGroup((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Group === null ||
            formValue.Group === undefined ||
            formValue.Group === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có nhóm điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsertSisteGroup(formValue);

            insertSiteGroup({
                variables: {
                    siteGroup: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertSiteGroup3S) {
                        if (res.data?.InsertSiteGroup3S !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm nhóm điểm lắp đặt thành công',
                            });
                            setValue('_id', res.data.InsertSiteGroup3S);

                            handleInsertSiteGroup(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm nhóm điểm lắp đặt không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm nhóm điểm lắp đặt không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm nhóm điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleUpdateSiteGroup = (formValue: any) => {
        const temp = [];

        for (const item of siteGroup) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setSiteGroup([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Group === null ||
            formValue.Group === undefined ||
            formValue.Group === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có nhóm điểm lắp đặt',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateSiteGroup({
                variables: {
                    siteGroup: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateSiteGroup3S) {
                        if (res.data.UpdateSiteGroup3S > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật nhóm điểm lắp đặt thành công',
                            });

                            handleUpdateSiteGroup(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật nhóm điểm lắp đặt không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật nhóm điểm lắp đặt không thành công',
                    });
                });
        }
    };

    const handleDeleteSiteGroup = (formValue: any) => {
        const filterSiteGroup = siteGroup.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterSiteGroupData = siteGroupData.filter(
            //@ts-ignore
            (el) => el.value !== formValue.Group,
        );

        //@ts-ignore
        setSiteGroupData([...filterSiteGroupData]);
        //@ts-ignore
        setSiteGroup([...filterSiteGroup]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa nhóm điểm lắp đặt?',
            text: 'Xóa nhóm điểm lắp đặt không thể nào hồi phục lại!',
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
                    formValue.Group === null ||
                    formValue.Group === undefined ||
                    formValue.Group === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có nhóm điểm lắp đặt',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteSiteGroup({
                        variables: {
                            siteGroup: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteSiteGroup3S) {
                                if (res.data.DeleteSiteGroup3S > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa nhóm điểm lắp đặt thành công',
                                    });

                                    handleDeleteSiteGroup(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa nhóm điểm lắp đặt không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa nhóm điểm lắp đặt không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {siteGroupData != undefined ? (
                    <Controller
                        name="Group"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Nhóm điểm lắp đặt"
                                //@ts-ignore
                                data={siteGroupData}
                                placeholder="Nhóm điểm lắp đặt"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo Nhóm điểm lắp đặt: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setSiteGroupData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseSiteGroup}
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

export default SiteGroup3S;
