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
    useGetCompaniesLazyQuery,
    useInsertSiteCompanyMutation,
    useUpdateSiteCompanyMutation,
    useDeleteSiteCompanyMutation,
} from '../__generated__/graphql';

import Swal from 'sweetalert2';

const SiteCompany = () => {
    const [siteCompany, setSiteCompany] = useState([]);
    const [siteCompanyData, setSiteCompanyData] = useState([]);

    const [getSiteCompany] = useGetCompaniesLazyQuery();
    const [insertSiteCompany] = useInsertSiteCompanyMutation();
    const [updateSiteCompany] = useUpdateSiteCompanyMutation();
    const [deleteSiteCompany] = useDeleteSiteCompanyMutation();

    const { reset, setValue, getValues, control } = useForm({
        defaultValues: {
            _id: '',
            Company: '',
            Production: null,
            Description: '',
        },
    });

    useEffect(() => {
        getSiteCompany()
            .then((res) => {
                if (res?.data?.GetCompanies) {
                    const temp = [];
                    for (const item of res.data?.GetCompanies) {
                        const obj = {
                            value: item?.Company,
                            label: `${item.Company} | ${item.Description}`,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setSiteCompanyData([...temp]);

                    //@ts-ignore
                    setSiteCompany([...res.data.GetCompanies]);
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const onChooseSiteCompany = (e: any) => {
        const find = siteCompany.find(
            //@ts-ignore
            (el) => el.Company === e.target.value.split('|')[0].trim(),
        );

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('Company', find.Comapny);
            //@ts-ignore
            setValue('Production', find.Production);
            //@ts-ignore
            setValue('Description', find.Description);
        }
    };

    const createObjInsertSisteComapny = (formValue: any) => {
        const obj = {
            Company: formValue.Company,
            Description: formValue.Description,
            Production: null,
        };

        return obj;
    };

    const handleInsertSiteCompany = (formValue: any) => {
        //@ts-ignore
        setSiteCompany((current) => [...current, formValue]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Company === null ||
            formValue.Company === undefined ||
            formValue.Company === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có quản lý',
            });

            isAllow = false;
        }

        if (isAllow) {
            const obj = createObjInsertSisteComapny(formValue);

            insertSiteCompany({
                variables: {
                    company: obj,
                },
            })
                .then((res) => {
                    if (res?.data?.InsertSiteCompany) {
                        if (res.data?.InsertSiteCompany !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm quản lý thành công',
                            });
                            setValue('_id', res.data.InsertSiteCompany);

                            handleInsertSiteCompany(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm quản lý không thành công',
                            });
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Thêm quản lý không thành công',
                        });
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm quản lý không thành công',
                    });
                });
        }
    };

    const handleUpdateSiteCompany = (formValue: any) => {
        const temp = [];

        for (const item of siteCompany) {
            //@ts-ignore
            if (item._id === formValue._id) {
                temp.push(formValue);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setSiteCompany([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();

        let isAllow = true;

        if (
            formValue.Company === null ||
            formValue.Company === undefined ||
            formValue.Company === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có quản lý',
            });

            isAllow = false;
        }

        if (isAllow) {
            updateSiteCompany({
                variables: {
                    company: formValue,
                },
            })
                .then((res) => {
                    if (res?.data?.UpdateSiteCompany) {
                        if (res.data.UpdateSiteCompany > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật quản lý thành công',
                            });

                            handleUpdateSiteCompany(formValue);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật quản lý không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    console.error(err);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật quản lý không thành công',
                    });
                });
        }
    };

    const handleDeleteSiteCompany = (formValue: any) => {
        const filterSiteCompany = siteCompany.filter(
            //@ts-ignore
            (el) => el._id !== formValue._id,
        );
        const filterSiteCompanyData = siteCompanyData.filter(
            //@ts-ignore
            (el) => el.value !== formValue.Company,
        );

        //@ts-ignore
        setSiteCompanyData([...filterSiteCompanyData]);
        //@ts-ignore
        setSiteCompany([...filterSiteCompany]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa quản lý?',
            text: 'Xóa quản lý không thể nào hồi phục lại!',
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
                    formValue.Company === null ||
                    formValue.Company === undefined ||
                    formValue.Company === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có quản lý',
                    });

                    isAllow = false;
                }
                if (isAllow) {
                    deleteSiteCompany({
                        variables: {
                            company: formValue,
                        },
                    })
                        .then((res) => {
                            if (res?.data?.DeleteSiteCompany) {
                                if (res.data?.DeleteSiteCompany > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa quản lý thành công',
                                    });

                                    handleDeleteSiteCompany(formValue);
                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa quản lý không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            console.error(err);
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa quản lý không thành công',
                            });
                        });
                }
            }
        });
    };

    return (
        <Grid>
            <Col md={6}>
                {siteCompanyData != undefined ? (
                    <Controller
                        name="Company"
                        control={control}
                        render={({ field }) => (
                            <Select
                                label="Quản lý"
                                //@ts-ignore
                                data={siteCompanyData}
                                placeholder="Quản lý"
                                nothingFound="Không tìm thấy"
                                searchable
                                creatable
                                {...field}
                                getCreateLabel={(query) =>
                                    `+ Tạo Quản lý: ${query}`
                                }
                                onCreate={(query) => {
                                    const item = {
                                        value: query,
                                        label: query,
                                    };
                                    //@ts-ignore
                                    setSiteCompanyData((current) => [
                                        ...current,
                                        item,
                                    ]);
                                    return item;
                                }}
                                onBlur={onChooseSiteCompany}
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

export default SiteCompany;
