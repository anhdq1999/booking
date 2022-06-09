import { yupResolver } from "@hookform/resolvers/yup";
import { roomActions } from 'actions';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from 'react-redux';
import { Button, Col, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import * as yup from 'yup';
const schema = yup.object().shape({
    name: yup
        .string().required("Name room is required"),
    host: yup
        .string().required("Host room is required"),
    category: yup
        .string().required("Type room is required"),
    description: yup
        .string().required("Description is required"),
    sdescription: yup
        .string().required("Short Description is required")
        .min(50, "At least 50 characters"),
    price: yup
        .string()
        .matches(/(?=.*?[0-9])/, "Phone Number must be number")
        .required("Price is required"),
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
        nameroom: '',
        hostroom: '',
        category: '',
        description: '',
        sdescription: '',
        price: '',
        province: '',
        ward: '',
        district: '',
        street: '',

    };
    const room = props.room;
    const alert = useSelector(state => state.alert)
    const users = useSelector(state => state.userReducer.items)
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
            setRoom(room)
        }
    }
    function toggle() {
        return props.toggle()
    }
    function setRoom(data) {
        data = data ? data : initialFormState
        setValue("name", data.name)
        setValue("host", data.host)
        setValue("category", data.category)
        setValue("description", data.description)
        setValue("shortDescription", data.shortDescription)
        setValue("price", data.price)
        setValue("country", data.address.country)
        setValue("province", data.address.province)
        setValue("ward", data.address.ward)
        setValue("district", data.address.district)
        setValue("street", data.address.street)
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
                <ModalBody className="maxw-900">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Row>
                            <Col md={6}>
                                <Label for="name"> Name Room:</Label>
                                <input className="form-control" type="text" id='name' {...register("name")}></input>
                                {errors?.nameroom &&
                                    <div className="alert-warning text-center">{errors.nameroom?.message}</div>
                                }
                                <Label > Category: </Label>
                                <select className="form-control" name="category"  {...register("category")}>
                                    <option name="category" value=''>...Chọn</option>
                                    <option name="category" value='homestay'>Homestay</option>
                                    <option name="category" value='America'>Restaurant - Room</option>
                                    {errors?.category &&
                                        <div className="alert-warning text-center">{errors.category?.message}</div>
                                    }
                                </select>
                                <Label > Short Description:</Label>
                                <textarea className="form-control" rows="7" name="shortDescription" id='shortDescription' {...register("shortDescription")}></textarea>
                                {errors?.shortDescription &&
                                    <div className="alert-warning text-center">{errors.shortDescription?.message}</div>
                                }
                            </Col>
                            <Col md={6}>
                                <Label > Host Room: </Label>
                                <select className="form-control" id='host' {...register("host")}>
                                    {users && users.map((item, index) => (
                                        <option value={item._id}>{item.fullname}</option>
                                    ))}
                                </select>
                                {errors?.hostroom &&
                                    <div className="alert-warning text-center">{errors.hostroom?.message}</div>
                                }
                                <Label for='price'> Price: </Label>
                                <input className="form-control" type="text" id='price' {...register("price")}></input>
                                {errors?.price &&
                                    <div className="alert-warning text-center">{errors.price?.message}</div>
                                }
                                <Label > Description:</Label>
                                <textarea className="form-control" id='description' {...register("description")}></textarea>
                                {errors?.description &&
                                    <div className="alert-warning text-center">{errors.description?.message}</div>
                                }
                            </Col>
                        </Row>
                        <Row  >
                            <Col>
                                <Label name="country"> Country:
                                    {/* <select className="form-control mb-3"    {...register("country")}>
                                        <option name="country" value=''>...Chọn</option>
                                        <option name="country" value='Vietnam'>Viet Nam</option>
                                        <option name="country" value='America'>America</option>
                                        </select> */}
                                    <input
                                        className="form-control"
                                        type="text"
                                        {...register("country")}
                                    ></input>
                                    {errors?.country &&
                                        <div className="alert-warning text-center">{errors.country?.message}</div>
                                    }
                                </Label>

                            </Col>
                            <Col>
                                <Label for='province' name="province"> Province:
                                    {/* <select className="form-control mb-3"   {...register("province")}>
                                        <option name="province" value=''>...Chọn</option>
                                        <option name="province" value='HoChiMinhCity'>Ho Chi Minh City</option>
                                        <option name="province" value='HaNoi'>Ha Noi</option>
                                        </select> */}
                                    <input
                                        className="form-control"
                                        type="text"
                                        {...register("province")}
                                    ></input>
                                    {errors?.province &&
                                        <div className="alert-warning text-center">{errors.province?.message}</div>
                                    }
                                </Label>
                            </Col>
                            <Col>
                                <Label for='ward' name="ward">Ward:
                                    {/* <select className="form-control mb-3"    {...register("ward")}>
                                        <option name="ward" value=''>...Chọn</option>
                                        <option name="ward" value='1'>1</option>
                                        <option name="ward" value='2'>2</option>
                                        </select> */}
                                    <input
                                        className="form-control"
                                        type="text"
                                        {...register("ward")}
                                    ></input>
                                    {errors?.ward &&
                                        <div className="alert-warning text-center">{errors.ward?.message}</div>
                                    }
                                </Label>
                            </Col>
                            <Col>
                                <Label for='district' name="district"> District:
                                    {/* <select className="form-control mb-3"   {...register("district")}>
                                        <option name="district" value=''>...Chọn</option>
                                        <option name="district" value='Tan Binh'>Tan Binh</option>
                                        <option name="district" value='1'>1</option>
                                        </select> */}
                                    <input
                                        className="form-control"
                                        type="text"
                                        {...register("district")}
                                    ></input>
                                    {errors?.district &&
                                        <div className="alert-warning text-center">{errors.district?.message}</div>
                                    }
                                </Label>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={12}>
                                <Label for='street' name="street">Street:
                                </Label>
                                <input className="form-control" name="address" type="text" {...register("street")}>
                                    {errors?.address &&
                                        <div className="alert-warning text-center">{errors.address?.message}</div>
                                    }
                                </input>
                            </Col>
                        </Row>
                        <Row className=" mt-3">
                            <Col md={12}>
                            <Label htmlFor="file" className="label">
                                Images
                            </Label>
                            <input className="form-control" type="file" id="file" multiple onChange={handleImageChange} />
                            </Col>
                        </Row>
                        <Row>
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