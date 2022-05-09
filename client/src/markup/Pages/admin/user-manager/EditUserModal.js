import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, Label, Form, Row, Col, FormGroup } from 'reactstrap';

class EditUserModal extends Component {
    constructor(props) {
        super(props);
    }
    fieldName =
        [
            "Username",
            "Password",
            "Email",
            "Fullname",
            "Date Of Birth",
            "Sex",
            "Phone",
            "Address",
            "Role"
        ]


    render() {
        //   console.log();
        const { isOpen, toggle, user } = this.props
        return (
            <div>
                <Modal size="lg"
                    isOpen={isOpen}
                    fade={false}
                    toggle={this.toggle}
                    className={this.props.className}>
                    <ModalHeader toggle={toggle}>Edit User</ModalHeader>
                    <ModalBody>
                        <Form>
                            {this.fieldName.map(item => (
                                <Row className="mt-3">
                                    <Col xs={4} >
                                        <Label >{item}</Label>
                                    </Col>
                                    <Col xs={6} className="ml-4">
                                        {
                                            item === "Username" &&
                                            <Input type='text' value={user.username} /> ||
                                            item === "Role" &&
                                            <Input type='text' value={user.roles} /> ||
                                            item === "Password" &&
                                            <Input type='password' value={user.hash_password} /> ||
                                            item === "Email" &&
                                            <Input type='email' value={user.email} /> ||
                                            item === "Date Of Birth" && 
                                            <Input type='date' value={user.dateOfBirth} /> ||
                                            item === "Sex" &&
                                            <Input type='checkbox' label='Nữ' value={user.sex} /> ||
                                            item === "Fullname" &&
                                            <Input type='text' value={user.fullName} /> ||
                                            item === "Address" &&
                                            <Input type='text' value={user.address} /> ||
                                            item === "Phone" &&
                                            <Input type='text' value={user.phoneNumber} /> ||
                                            <Input type='text' />
                                        }
                                    </Col>
                                </Row>
                            ))}


                        </Form>

                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
export default EditUserModal