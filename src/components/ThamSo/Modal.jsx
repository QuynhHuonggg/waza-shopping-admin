import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import ThamSo from "./ThamSo.module.scss";

export default function Example() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={ThamSo.thamso} >
        <Button className={ThamSo.button} variant="primary" onClick={handleShow}>
          Thêm tham số
        </Button>
      </div>
      <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button className={ThamSo.close} variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button className={ThamSo.save} variant="primary" onClick={handleClose}>
            Save Changes
            </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
}

