import React from 'react'
import { Col, Form, Input, Label, Row } from 'reactstrap';

export default function UserModal() {
    const [modalIsOpen, setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(props.isOpen);
    }

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <Form>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="fullname">
                                    Full Name
                                </Label>
                                <Input
                                    id="fullname"
                                    name="fullname"
                                    placeholder="with a placeholder"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="dateOfBirth">
                                    Date Of Birth
                                </Label>
                                <Input
                                    id="dateOfBirth"
                                    name="dateOfBirth"
                                    type="date"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="username">
                                    Username
                                </Label>
                                <Input
                                    id="username"
                                    name="username"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="email">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="password">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    name="password"
                                    placeholder="password placeholder"
                                    type="password"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="password">
                                    Password
                                </Label>
                                <Input
                                    id="address"
                                    name="address"
                                    type="address"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="phoneNumber">
                                    Phone Number
                                </Label>
                                <Input
                                    id="phoneNumber"
                                    name="phoneNumber"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="address">
                                    Address
                                </Label>
                                <Input
                                    id="address"
                                    name="address"
                                    type="text"
                                />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup>
                                <Label for="sex">
                                    Sex
                                </Label>
                                <Input
                                    id="sex"
                                    name="sex"
                                    placeholder="password placeholder"
                                    type="select"
                                />
                                <option>
                                    Nam
                                </option>
                                <option>
                                    Nữ
                                </option>
                            </FormGroup>
                        </Col>
                    </Row>
                </Form>
            </Modal>
        </div>
    );
}
