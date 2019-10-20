import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { IoMdCreate } from "react-icons/io";
import user from './User.module.scss';

export default function Deatail() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div  >
                <Button className={user.btnEdit} variant="primary" onClick={handleShow}>
                    <IoMdCreate />
                </Button>
            </div>

            <div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        Woohoo, you're reading this text in a modal!</Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
              </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
              </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    );
}