import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import {Button} from 'react-bootstrap';
import { TiDelete } from 'react-icons/ti';

import order from './Order.module.scss';

class ProductTable extends Component {
    render() {
        return (
            <div >
                <Row className={order.table}>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className={order.titleTable}>Product</h6>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Id</th>
                                            <th scope="col" className="border-0">Item</th>
                                            <th scope="col" className="border-0">Quantity</th>
                                            <th scope="col" className="border-0">Price</th>
                                            <th scope="col" className="border-0">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>1</td>
                                            <td>Carrot</td>
                                            <td>3</td>
                                            <td>5000</td>
                                            <td>15000</td>
                                        </tr>

                                        <tr>
                                            <td>2</td>
                                            <td>Meat</td>
                                            <td>1</td>
                                            <td>25000</td>
                                            <td>25000</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductTable;