import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { TiPlus } from 'react-icons/ti';

import OrderItem from './OrderItem';
import order from './Order.module.scss';

class OrderList extends Component {

    render() {

        return (
            <div >
                <Row className={order.row}>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className={order.title}>Orders List</h6>
                                <br/>
                                {/* <a href="#" className={order.createBtn}><TiPlus />CREATE</a> */}
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Id</th>
                                            <th scope="col" className="border-0">Status</th>
                                            <th scope="col" className="border-0">User</th>
                                            <th scope="col" className="border-0">Shop</th>
                                            <th scope="col" className="border-0">Driver</th>
                                            <th scope="col" className="border-0">Price</th>
                                        </tr>
                                    </thead>
                                    <OrderItem />
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default OrderList;
