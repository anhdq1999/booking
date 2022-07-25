import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { useForm } from 'react-hook-form';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { userService } from 'services';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { orderActions } from 'actions';

const schema = yup.object().shape({

})
export default function BookNowModal(props) {
    const room = props.room

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const [value, setValue] = useState([null, null]);


    const onSubmit = (data) => {
        let user = userService.getCurrentUser()
        let checkInDate = new Date(value[0]).toUTCString()
        let checkOutDate = new Date(value[1]).toUTCString()
        data.dates = {
            checkInDate,
            checkOutDate
        }
        data.room = room;
        data.user = user.id;
        dispatch(orderActions.initBookNowItem(data));
    }
    function toggle() {
        return props.toggle()
    }

    return (
        <div>
            <Modal
                className="max-w800"
                isOpen={props.isOpen}
                toggle={() => toggle()}
            >
                <ModalHeader className="modal-title"
                    id="exampleModalLabel">
                    Get the Best Holiday Planned by Experts!
                </ModalHeader>
                <ModalBody>
                    <h5 className="text-center">Enter your contact details and we will plan the best holiday suiting all your requirements.</h5>
                    <form id="bookNowModal" onSubmit={handleSubmit(onSubmit)}>
                        <div className="row" style={{ "justifyContent": "space-around" }}>
                            <div className="form-group">
                                <LocalizationProvider
                                    dateAdapter={AdapterDateFns}
                                    localeText={{ start: 'Check-in', end: 'Check-out' }}
                                >
                                    <DateRangePicker

                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(startProps, endProps) => (
                                            <React.Fragment>
                                                <TextField {...startProps} />
                                                <Box sx={{ mx: 2 }}> to </Box>
                                                <TextField {...endProps} />
                                            </React.Fragment>
                                        )}
                                    />
                                </LocalizationProvider>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="quantity btn-quantity">
                                    <input
                                        id="demo_vertical2"
                                        className="form-control"
                                        type="text"
                                        name="demo_vertical2"
                                        {...register("adults")} />
                                    <span className="font-12">Adult (12yrs +)</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="quantity btn-quantity">
                                    <input
                                        id="demo_vertical2"
                                        className="form-control"
                                        type="text"
                                        name="demo_vertical2"
                                        {...register("child")} />
                                    <span className="font-12">Child (2-12yrs)</span>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="quantity btn-quantity">
                                    <input
                                        id="demo_vertical2"
                                        className="form-control"
                                        type="text"
                                        name="demo_vertical2"
                                        {...register("infants")} />
                                    <span className="font-12">Infant (0-2yrs)</span>
                                </div>
                            </div>
                        </div>
                    </form>
                </ModalBody>
                <ModalFooter>
                    <button type="submit" form="bookNowModal" className="site-button">Submit</button>
                    <Button
                        color="primary" onClick={() => toggle()}>
                        Cancel
                    </Button>

                </ModalFooter>
            </Modal>
        </div>
    );
}