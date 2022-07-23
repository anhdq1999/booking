import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react'
import { DateRangePicker, LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
import { useForm } from 'react-hook-form';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap";
import * as yup from 'yup';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const schema = yup.object().shape({

})
export default function BookNowModal(props) {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
    })
    const [value, setValue] = useState([null, null]);

    const onSubmit = (data) => {
        console.log(value);
        console.log(data);
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
                        <div className="text-center">
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
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            className="form-control"
                                            placeholder="Your Name"
                                            type="text"
                                            {...register("customerName")}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <div className="input-group">
                                        <input
                                            className="form-control"
                                            placeholder="Your Phone Number"
                                            type="text"
                                            {...register("customerPhone")} />
                                    </div>
                                </div>
                            </div>
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