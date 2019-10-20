import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { IoMdCreate } from "react-icons/io";
import shop from './Shop.module.scss';

import ShopDetail from './ShopDetail';

export default function Deatail() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div  >
        <Button className={shop.btnEdit} variant="primary" onClick={handleShow}>
          <IoMdCreate/>
        </Button>
      </div>

      <div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Shop Detail</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <ShopDetail />
          </Modal.Body>

          <Modal.Footer>
            <Button  variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button style={{backgroundColor:"green", color:"black"}} variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
            <Button style={{backgroundColor:"red", color:"black"}}  variant="primary" onClick={handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}