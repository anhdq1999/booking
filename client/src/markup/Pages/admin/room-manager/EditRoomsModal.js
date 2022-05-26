import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter, Input, Label, Form, Row, Col, FormGroup } from 'reactstrap';

class EditRoomsModal extends Component {
    constructor(props) {
        super(props);
    }
    fieldName =
        [
            'STT',
        'NameRoom',
        'HostRoom',
        'Address',
        'Category',
        'shortDescription',
        'Description',
        'Image',
        'Price',
        // 'Rating',
        // 'NumReviews',
        // 'Reviews'
        ]


    render() {
        const { isOpen, toggle, room } = this.props
        return (
            <div>
                <Modal size="lg"
                    isOpen={isOpen}
                    fade={false}
                    toggle={this.toggle}
                    className={this.props.className}>
                    <ModalHeader toggle={toggle}>Edit Room</ModalHeader>
                    <ModalBody>
                        <Form>
                            {this.fieldName.map(item => (
                                <Row className="mt-3">
                                    <Col xs={4} >
                                        <Label >{item}</Label>
                                    </Col>
                                    <Col xs={6} className="ml-4">
                                        {
                                            item === "Name Room" &&
                                            <Input type='text' value={room.name} /> ||
                                            item === "Host" &&
                                            <Input type='text' value={room.host} /> ||
                                            item === "Address" &&
                                            <Input type='text' value={room.address} /> ||
                                            item === "Category" &&
                                            <Input type='text' value={room.category} /> ||
                                            item === "Date Of Birth" && 
                                            <Input type='date' value={room.description} /> ||
                                            item === "Image" &&
                                            <Input type='text'  value={room.image} /> ||
                                            item === "Price" &&
                                            <Input type='text' value={room.price} /> ||
                                           
                                          
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
export default EditRoomsModal;  