import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import Create from './ModalCreate';
import ShopItem from './ShopItem';
import shop from './Shop.module.scss';

class ShopList extends Component {

    render() {

        return (
            <div >
                <Row className={shop.row}>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className={shop.title}>Shops List</h6>
                                <Create />
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Id</th>
                                            <th scope="col" className="border-0">Name</th>
                                            <th scope="col" className="border-0">Address</th>
                                            <th scope="col" className="border-0">Phone</th>
                                            <th scope="col" className="border-0"></th>
                                        </tr>
                                    </thead>
                                    <ShopItem />
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ShopList;