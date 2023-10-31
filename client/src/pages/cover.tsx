import { Select, Grid, Col, Button, Space, Center } from '@mantine/core';

import { useEffect, useState } from 'react';

import { Controller, useForm } from 'react-hook-form';

import {
    useGetAllSiteCoverLazyQuery,
    useGetAllCoverHLazyQuery,
    useGetAllCoverLLazyQuery,
    useGetAllCoverWLazyQuery,
    useGetAllCorverMeterialLazyQuery,
    useGetAllCoverNlLazyQuery,
    useInsertCoverMutation,
    useUpdateCoverMutation,
    useDeleteCoverMutation,
} from '../__generated__/graphql';

import { checkAdminViewerRole } from '../utils/utils';

import Swal from 'sweetalert2';

import { motion } from 'framer-motion';

const CoverPage = () => {
    const [coverData, setCoverData] = useState([]);
    const [coverLData, setCoverLData] = useState([]);
    const [coverWData, setCoverWData] = useState([]);
    const [coverHData, setCoverHData] = useState([]);
    const [coverNLData, setCoverNLData] = useState([]);
    const [coverMeterialData, setCoverMeterialData] = useState([]);

    const [listCover, setListCover] = useState([]);

    const [isAdminViewer, setIsAdminViewer] = useState(false);

    const [getCover, {}] = useGetAllSiteCoverLazyQuery();
    const [getCoverL, {}] = useGetAllCoverLLazyQuery();
    const [getCoverW, {}] = useGetAllCoverWLazyQuery();
    const [getCoverH, {}] = useGetAllCoverHLazyQuery();
    const [getCoverNL, {}] = useGetAllCoverNlLazyQuery();
    const [getCoverMeterial, {}] = useGetAllCorverMeterialLazyQuery();

    const [insertCover, {}] = useInsertCoverMutation();
    const [updateCover, {}] = useUpdateCoverMutation();
    const [deleteCover, {}] = useDeleteCoverMutation();

    const { control, reset, register, getValues, setValue } = useForm({
        defaultValues: {
            _id: '',
            CoverID: '',
            CoverL: 0,
            CoverW: 0,
            CoverH: 0,
            CoverMeterial: '',
            CoverNL: 0,
        },
    });

    useEffect(() => {
        setIsAdminViewer(checkAdminViewerRole());

        getCover()
            .then((res) => {
                if (
                    res?.data?.GetAllSiteCover !== null &&
                    res?.data?.GetAllSiteCover !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllSiteCover) {
                        const obj = {
                            value: item?.CoverID,
                            label: item?.CoverID,
                        };

                        temp.push(obj);
                    }

                    //@ts-ignore
                    setCoverData([...temp]);

                    //@ts-ignore
                    setListCover([...res.data.GetAllSiteCover]);
                }
            })
            .catch((err) => console.log(err));

        getCoverL()
            .then((res) => {
                if (
                    res?.data?.GetAllCoverL !== null &&
                    res?.data?.GetAllCoverL !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllCoverL) {
                        if (item !== null && item !== undefined) {
                            const obj = {
                                value: item.toString(),
                                label: item.toString(),
                            };

                            temp.push(obj);
                        }
                    }

                    //@ts-ignore
                    setCoverLData([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getCoverH()
            .then((res) => {
                if (
                    res?.data?.GetAllCoverH !== null &&
                    res?.data?.GetAllCoverH !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllCoverH) {
                        if (item !== null && item !== undefined) {
                            const obj = {
                                value: item.toString(),
                                label: item.toString(),
                            };

                            temp.push(obj);
                        }
                    }

                    //@ts-ignore
                    setCoverHData([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getCoverW()
            .then((res) => {
                if (
                    res?.data?.GetAllCoverW !== null &&
                    res?.data?.GetAllCoverW !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllCoverW) {
                        if (item !== null && item !== undefined) {
                            const obj = {
                                value: item.toString(),
                                label: item.toString(),
                            };

                            temp.push(obj);
                        }
                    }

                    //@ts-ignore
                    setCoverWData([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getCoverMeterial()
            .then((res) => {
                if (
                    res?.data?.GetAllCorverMeterial !== null &&
                    res?.data?.GetAllCorverMeterial !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllCorverMeterial) {
                        if (item !== null && item !== undefined) {
                            const obj = {
                                value: item,
                                label: item,
                            };

                            temp.push(obj);
                        }
                    }

                    //@ts-ignore
                    setCoverMeterialData([...temp]);
                }
            })
            .catch((err) => console.log(err));

        getCoverNL()
            .then((res) => {
                if (
                    res?.data?.GetAllCoverNL !== null &&
                    res?.data?.GetAllCoverNL !== undefined
                ) {
                    const temp = [];

                    for (const item of res.data.GetAllCoverNL) {
                        if (item !== null && item !== undefined) {
                            const obj = {
                                value: item.toString(),
                                label: item.toString(),
                            };

                            temp.push(obj);
                        }
                    }

                    //@ts-ignore
                    setCoverNLData([...temp]);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const onCoverIDBlured = (e: any) => {
        //@ts-ignore
        const find = listCover.find((el) => el.CoverID === e.target.value);

        if (find !== undefined) {
            //@ts-ignore
            setValue('_id', find._id);
            //@ts-ignore
            setValue('CoverID', find.CoverID);
            //@ts-ignore
            setValue('CoverMeterial', find.CoverMeterial);
            //@ts-ignore
            setValue('CoverNL', find.CoverNL ? find.CoverNL.toString() : '');
            //@ts-ignore
            setValue('CoverW', find.CoverW ? find.CoverW.toString() : '');
            //@ts-ignore
            setValue('CoverH', find.CoverH ? find.CoverH.toString() : '');
            //@ts-ignore
            setValue('CoverL', find.CoverL ? find.CoverL.toString() : '');
        }
    };

    const createObjInsertCover = () => {
        const formValue = getValues();

        const obj = {
            //@ts-ignore
            CoverID: formValue.CoverID,
            //@ts-ignore
            CoverL:
                //@ts-ignore
                formValue.CoverL !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverL)
                    : 0,
            //@ts-ignore
            CoverW:
                //@ts-ignore
                formValue.CoverW !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverW)
                    : 0,
            //@ts-ignore
            CoverH:
                //@ts-ignore
                formValue.CoverH !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverH)
                    : 0,
            CoverMeterial: formValue.CoverMeterial,
            //@ts-ignore
            CoverNL:
                //@ts-ignore
                formValue.CoverNL !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverNL)
                    : 0,
        };

        return obj;
    };

    const createObjUpdateCover = () => {
        const formValue = getValues();

        const obj = {
            _id: formValue._id,
            CoverID: formValue.CoverID,
            //@ts-ignore
            CoverL:
                //@ts-ignore
                formValue.CoverL !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverL)
                    : 0,
            //@ts-ignore
            CoverW:
                //@ts-ignore
                formValue.CoverW !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverW)
                    : 0,
            //@ts-ignore
            CoverH:
                //@ts-ignore
                formValue.CoverH !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverH)
                    : 0,
            CoverMeterial: formValue.CoverMeterial,
            //@ts-ignore
            CoverNL:
                //@ts-ignore
                formValue.CoverNL !== '' && formValue !== null
                    ? //@ts-ignore
                      parseInt(formValue.CoverNL)
                    : 0,
        };

        return obj;
    };

    const handelInsertCover = (cover: any) => {
        //@ts-ignore
        setListCover((current) => [...current, cover]);
    };

    const onInsertClicked = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.CoverID === null ||
            formValue.CoverID === undefined ||
            formValue.CoverID === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã nấp hầm!!!',
            });

            isAllow = false;
        }

        if (isAllow === true) {
            insertCover({
                variables: {
                    cover: createObjInsertCover(),
                },
            })
                .then((res) => {
                    if (
                        res?.data?.InsertCover !== null &&
                        res?.data?.InsertCover !== undefined
                    ) {
                        console.log(res.data.InsertCover);

                        if (res.data.InsertCover !== '') {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Thêm nấp hầm thành công',
                            });

                            setValue('_id', res.data.InsertCover);

                            handelInsertCover(createObjUpdateCover());
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Thêm nấp hầm không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Thêm nấp hầm không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelUpdateCover = (cover: any) => {
        const temp = [];

        for (const item of listCover) {
            //@ts-ignore
            if (item._id === cover._id) {
                temp.push(cover);
            } else {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListCover([...temp]);
    };

    const onUpdateClicked = () => {
        const formValue = getValues();
        let isAllow = true;

        if (
            formValue.CoverID === null ||
            formValue.CoverID === undefined ||
            formValue.CoverID === ''
        ) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Chưa có mã nấp hầm!!!',
            });

            isAllow = false;
        }

        if (isAllow === true) {
            const obj = createObjUpdateCover();

            updateCover({
                variables: {
                    cover: obj,
                },
            })
                .then((res) => {
                    if (
                        res?.data?.UpdateCover !== null &&
                        res?.data?.UpdateCover !== undefined
                    ) {
                        if (res.data.UpdateCover > 0) {
                            Swal.fire({
                                icon: 'success',
                                title: 'Successfull',
                                text: 'Cập nhật nấp hầm thành công',
                            });

                            handelUpdateCover(obj);
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cập nhật nấp hầm không thành công',
                            });
                        }
                    }
                })
                .catch((err) => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Cập nhật nấp hầm không thành công',
                    });
                    console.log(err);
                });
        }
    };

    const handelDeleteCover = (cover: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of listCover) {
            //@ts-ignore
            if (item._id !== cover._id) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setListCover([...temp]);
    };

    const handelDeleteCoverData = (cover: any) => {
        //@ts-ignore
        const temp = [];

        for (const item of coverData) {
            //@ts-ignore
            if (item !== cover.CoverID) {
                temp.push(item);
            }
        }

        //@ts-ignore
        setCoverData([...temp]);
    };

    const onDeleteClicked = () => {
        Swal.fire({
            title: 'Xóa nâp hầm?',
            text: 'Xóa nâp hầm không thể nào hồi phục lại!',
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
                    formValue.CoverID === null ||
                    formValue.CoverID === undefined ||
                    formValue.CoverID === ''
                ) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Chưa có mã nấp hầm!!!',
                    });

                    isAllow = false;
                }

                if (isAllow === true) {
                    const obj = createObjUpdateCover();

                    deleteCover({
                        variables: {
                            cover: obj,
                        },
                    })
                        .then((res) => {
                            if (
                                res?.data?.DeleteCover !== null &&
                                res?.data?.DeleteCover !== undefined
                            ) {
                                if (res.data.DeleteCover > 0) {
                                    Swal.fire({
                                        icon: 'success',
                                        title: 'Successfull',
                                        text: 'Xóa nấp hầm thành công',
                                    });

                                    handelDeleteCover(obj);

                                    handelDeleteCoverData(obj);

                                    reset();
                                } else {
                                    Swal.fire({
                                        icon: 'error',
                                        title: 'Oops...',
                                        text: 'Xóa nấp hầm không thành công',
                                    });
                                }
                            }
                        })
                        .catch((err) => {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Xóa nấp hầm không thành công',
                            });
                            console.log(err);
                        });
                }
            }
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <Grid>
                <Col md={4}>
                    {listCover !== undefined ? (
                        <Controller
                            name="CoverID"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Mã nấp hầm"
                                    //@ts-ignore
                                    data={coverData}
                                    placeholder="Chọn mã nấp hầm"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    onBlur={onCoverIDBlured}
                                    getCreateLabel={(query) =>
                                        `+ Tạo mã nấp hầm: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setCoverData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {coverMeterialData !== undefined ? (
                        <Controller
                            name="CoverMeterial"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    label="Vật liệu"
                                    //@ts-ignore
                                    data={coverMeterialData}
                                    placeholder="Chọn vật liệu"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo vật liệu: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setCoverMeterialData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {coverNLData !== undefined ? (
                        <Controller
                            name="CoverNL"
                            control={control}
                            render={({ field }) => (
                                //@ts-ignore
                                <Select
                                    label="Số tấm"
                                    //@ts-ignore
                                    data={coverNLData}
                                    placeholder="Chọn số tấm"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo số tấm: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setCoverNLData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {coverLData !== undefined ? (
                        <Controller
                            name="CoverL"
                            control={control}
                            render={({ field }) => (
                                //@ts-ignore
                                <Select
                                    label="Dài"
                                    //@ts-ignore
                                    data={coverLData}
                                    placeholder="Chọn dài"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo dài: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setCoverLData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {coverWData !== undefined ? (
                        <Controller
                            name="CoverW"
                            control={control}
                            render={({ field }) => (
                                //@ts-ignore
                                <Select
                                    label="Rộng"
                                    //@ts-ignore
                                    data={coverWData}
                                    placeholder="Chọn rộng"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo rộng: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setCoverWData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col md={4}>
                    {coverHData !== undefined ? (
                        <Controller
                            name="CoverH"
                            control={control}
                            render={({ field }) => (
                                //@ts-ignore
                                <Select
                                    label="Cao"
                                    //@ts-ignore
                                    data={coverHData}
                                    placeholder="Chọn cao"
                                    nothingFound="Không tìm thấy"
                                    searchable
                                    creatable
                                    {...field}
                                    getCreateLabel={(query) =>
                                        `+ Tạo cao: ${query}`
                                    }
                                    onCreate={(query) => {
                                        const item = {
                                            value: query,
                                            label: query,
                                        };
                                        //@ts-ignore
                                        setCoverHData((current) => [
                                            ...current,
                                            item,
                                        ]);
                                        return item;
                                    }}
                                />
                            )}
                        ></Controller>
                    ) : null}
                </Col>
                <Col span={12}>
                    {isAdminViewer == false ? (
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
                    ) : null}
                </Col>
            </Grid>
        </motion.div>
    );
};

export default CoverPage;
