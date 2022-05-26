
import { Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { roomsService } from 'services';
import React, { useEffect, useState } from 'react'



// type FormValues = {
//     nameRoom: String;
//     hostRoom: String;
//     category: String;
//     shortDescription: String;
//     description: String;
//     price: DoubleRange;
//     country: String;
//     province: String;
//     district: String;
//     ward: String;
//     street: String;
//     position: String;
//     createdAt: String;
//   };
function RoomForm(props) {
    // FORM NEW ROOM by TON
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleImageChange = (e) => {
      if (e.target.files) {
        const filesArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );
  
  
        setSelectedFiles((prevImages) => prevImages.concat(filesArray));
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
  
  
        <Form >
          <h1>React Hook Form</h1>
  
          <Row>
            <Col>
              <Label htmlFor="name"> Name Room:</Label>
              <Input type="text" id='name' placeholder='Name'></Input>
  
              <Label > Category: </Label>
              <Input type="text" id='category' placeholder='Category'></Input>
  
              <Label > Short Description:</Label>
              <Input type="textarea" id='shortdescription' placeholder='Short Description'></Input>
  
            </Col>
            <Col>
  
              <Label > Host Room: </Label>
              <Input type="text" id='host-name' placeholder='Host Name'></Input>
  
              <Label htmlFor='price'> Price: </Label>
              <Input type="double" id='price' placeholder='Price'></Input>
  
              <Label > Description:</Label>
              <Input type="textarea" id='description' placeholder='Description'></Input>
  
            </Col>
          </Row>
          <Row  >
            <Col>
              <Label> Country:
                <Input bsSize="sm" className="mb-3" type="select">
                  <option>
                    Việt Nam
                  </option>
                </Input>
              </Label>
            </Col>
            <Col>
              <Label htmlFor='province'> Province:
                <Input bsSize="sm" className="mb-3" type="select">
                  <option>
                    Hồ Chí Minh
                  </option>
                  <option>
                    Hà Nội
                  </option>
                  <option>
                    Đà Nẵng
                  </option>
                </Input>
              </Label>
            </Col>
            <Col>
              <Label htmlFor='ward'>Ward:
                <Input bsSize="sm" className="mb-3" type="select">
                  <option>
                    Tân Phú
                  </option>
                </Input>
              </Label>
            </Col>
            <Col>
              <Label htmlFor='district'> District:
                <Input bsSize="sm" className="mb-3" type="select">
                  <option>
                    7
                  </option>
                </Input>
              </Label>
            </Col>
            <Col>
              <Label htmlFor='street'>Street:
                <Input bsSize="sm" className="mb-3" type="select">
                  <option>
                    Nguyễn Văn Linh
                  </option>
                </Input>
              </Label>
            </Col>
          </Row>
          <Label htmlFor='position'>Position Google: <Input type="text" id='position' placeholder='Position'></Input></Label>
  
          <input type="file" id="file" multiple onChange={handleImageChange} />
                      <Label htmlFor="file" className="label">
                          <i className="material-icons"></i>
                      </Label>
                      <div className="result">{renderPhotos(selectedFiles)}</div>
  
        </Form>
      </div>
    );
        //------------------------------//
}
function mapState(state) {

}
const actionCreators = {
    getAll: roomActions.getAll,
    delete: roomActions.delete
}
const connectedRoomPage = connect(mapState, actionCreators)(RoomForm)
export { connectedRoomPage as RoomForm };
