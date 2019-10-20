import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { IoMdCreate } from "react-icons/io";
import order from './Order.module.scss';
import OrderDetail from './OrderDetail';

export default function Deatail() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div  >
                <Button className={order.btnEdit} variant="primary" onClick={handleShow}>
                    <IoMdCreate />
                </Button>
            </div>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className="text-center">Order Detail</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <OrderDetail />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button style={{ backgroundColor: "red", color: "black" }} variant="primary" onClick={handleClose}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}
