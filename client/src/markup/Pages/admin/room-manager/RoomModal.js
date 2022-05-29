import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { roomActions } from 'actions';
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row, Input } from 'reactstrap';
import * as yup from 'yup';
const schema = yup.object().shape({
    nameroom: yup
        .string().required("Name room is required"),
    hostroom: yup
        .string().required("Host room is required"),
    category: yup
        .string().required("Type room is required"),
    description: yup
        .string().required("Description is required"),
    sdescription: yup
        .string().required("Short Description is required")
        .min(50, "At least 50 characters"),
    price: yup
        .number().required("Price is required")
        .min(6, " At least 100.000 VNĐ")
        .max(9, "Price room is so expensive"),
    country: yup
        .string().required("Country is required"),
    province: yup
        .string().required("Province is required"),
    ward: yup
        .string().required("Ward is required"),
    district: yup
        .string().required("District is required"),
    street: yup
        .string().required("Street is required"),
})
export default function RoomModal(props) {
    const initialFormState = {
        nameroom: ' ',
        hostroom: ' ',
        category: ' ',
        description: ' ',
        sdescription: ' ',
        price: ' ',
        province: ' ',
        ward: ' ',
        district: ' ',
        street: ' ',

    };
    const room = props.room;
    const alert = useSelector(state => state.alert)
    const newRoom = useSelector(state => state.roomReducer.editRoom)
    const dispatch = useDispatch();
    const {
        register,
        setValue,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onBlur',
        resolver: yupResolver(schema),
    })
    if (room) {
        if (newRoom) {
            setRoom(newRoom)
        } else {
            setValue(room)
        }
    }
    function toggle() {
        return props.toggle()
    }
    function setRoom(data) {
        data = data ? data : initialFormState
        setValue("name", data.nameroom)
        setValue("hostroom", data.hostroom)
        setValue("category", data.category)
        setValue("description", data.description)
        setValue("shortdescription", data.sdescription)
        setValue("price", data.price)
        setValue("country", data.country)
        setValue("province", data.province)
        setValue("ward", data.ward)
        setValue("district", data.district)
        setValue("street", data.street)
    }
    function handleAdd(data) {
        dispatch(roomActions.create(data))
    }
    function handleEdit(data) {
        dispatch(roomActions.update(room, data))
    }
    const onSubmit = data => {
        if (room) {
            handleEdit(data)
        } else handleAdd(data)
    }

    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map((file) =>
                URL.createObjectURL(file)
            );


            setSelectedFiles((pImages) => pImages.concat(filesArray));
            Array.from(e.target.files).map(
                (file) => URL.revokeObjectURL(file)
            );
        }
    };

    const renderPhotos = (source) => {
        console.log("source: ", source);
        return source.map((photo) => {
            return <img src={photo} alt="" key={photo} />;
        });
    };
    return (
        <div>
            <Modal
                className="max-w800"
                isOpen={props.isOpen}
                toggle={() => toggle()}
            >
                <ModalHeader>
                    Form
                </ModalHeader>
                <ModalBody>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Row>
                            <Col md={6}>
                                <Label for="name"> Name Room:</Label>
                                <Input type="text" id='name' {...register("name")}></Input>
                                {errors?.nameroom &&
                                    <div className="alert-warning text-center">{errors.nameroom?.message}</div>
                                }
                                <Label > Category: </Label>
                                <Input bsSize="sm" className="mb-3" type="select" {...register("category")}>
                                    <option name="category" value=''>...Chọn</option>
                                    <option name="category" value='Vietnam'>Homestay</option>
                                    <option name="category" value='America'>Restaurant - Room</option>
                                    {errors?.category &&
                                        <div className="alert-warning text-center">{errors.category?.message}</div>
                                    }
                                </Input>
                                <Label > Short Description:</Label>
                                <Input type="textarea" id='shortdescription' {...register("shortdescription")}></Input>
                                {errors?.sdescription &&
                                    <div className="alert-warning text-center">{errors.sdescription?.message}</div>
                                }
                            </Col>
                            <Col md={6}>
                                <Label > Host Room: </Label>
                                <Input type="text" id='host-name' {...register("hostname")}></Input>
                                {errors?.hostroom &&
                                    <div className="alert-warning text-center">{errors.hostroom?.message}</div>
                                }
                                <Label for='price'> Price: </Label>
                                <Input type="double" id='price' {...register("price")}></Input>
                                {errors?.price &&
                                    <div className="alert-warning text-center">{errors.price?.message}</div>
                                }
                                <Label > Description:</Label>
                                <Input type="textarea" id='description' {...register("description")}></Input>
                                {errors?.description &&
                                    <div className="alert-warning text-center">{errors.description?.message}</div>
                                }
                            </Col>
                        </Row>
                        <Row  >
                            <Col>
                                <Label name="country"> Country:
                                    <Input bsSize="sm" className="mb-3" type="select" {...register("country")}>
                                        <option name="country" value=''>...Chọn</option>
                                        <option name="country" value='Vietnam'>Viet Nam</option>
                                        <option name="country" value='America'>America</option>
                                        {errors?.country &&
                                            <div className="alert-warning text-center">{errors.country?.message}</div>
                                        }
                                    </Input>
                                </Label>

                            </Col>
                            <Col>
                                <Label for='province' name="province"> Province:
                                    <Input bsSize="sm" className="mb-3" type="select" {...register("province")}>
                                        <option name="province" value=''>...Chọn</option>
                                        <option name="province" value='HoChiMinhCity'>Ho Chi Minh City</option>
                                        <option name="province" value='HaNoi'>Ha Noi</option>
                                        {errors?.province &&
                                            <div className="alert-warning text-center">{errors.province?.message}</div>
                                        }
                                    </Input>
                                </Label>
                            </Col>
                            <Col>
                                <Label for='ward' name="ward">Ward:
                                    <Input bsSize="sm" className="mb-3" type="select" {...register("ward")}>
                                        <option name="ward" value=''>...Chọn</option>
                                        <option name="ward" value='1'>1</option>
                                        <option name="ward" value='2'>2</option>
                                        {errors?.ward &&
                                            <div className="alert-warning text-center">{errors.ward?.message}</div>
                                        }
                                    </Input>
                                </Label>
                            </Col>
                            <Col>
                                <Label for='district' name="district"> District:
                                    <Input bsSize="sm" className="mb-3" type="select" {...register("district")}>
                                        <option name="district" value=''>...Chọn</option>
                                        <option name="district" value='Tan Binh'>Tan Binh</option>
                                        <option name="district" value='1'>1</option>
                                        {errors?.district &&
                                            <div className="alert-warning text-center">{errors.district?.message}</div>
                                        }
                                    </Input>
                                </Label>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Label for='address' name="address">Address:
                                    <Input name="address" type="text" {...register("address")}>
                                        {errors?.address &&
                                            <div className="alert-warning text-center">{errors.address?.message}</div>
                                        }
                                    </Input>
                                </Label>
                            </Col>
                        </Row>
                        <Row className="ml-3">
                            <input type="file" id="file" multiple onChange={handleImageChange} />
                            <Label htmlFor="file" className="label">
                                <i className="material-icons"></i>
                            </Label>
                            <div className="result-image">
                                <Col md={2}>{renderPhotos(selectedFiles)}</Col>
                            </div>

                        </Row>
                        <Row className="mt-3">
                            <Col md={6}>
                                <Button
                                    color="primary"
                                    type="submit"
                                >
                                    {room ? 'Edit Room' : 'Add new room'}
                                </Button>
                            </Col>

                            {room &&
                                <Col md={6} className="text-right">
                                    <Button
                                        color='primary'
                                        type='button'
                                        onClick={() => reset()}>Reset</Button>
                                </Col>
                            }
                        </Row>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <Button
                        color="primary" onClick={() => toggle()}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )

}