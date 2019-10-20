import React from 'react';
import {
    Card,
    Container,
    ListGroup,
    ListGroupItem,
    Row,
    Col,
    Form,
    FormInput
} from "shards-react";
import ProductTable from './ProductTable';
import order from './Order.module.scss';

const OrderDetail = () => (
    <Container fluid className="main-content-container px-4">
        <Row>
            <Col>
                <Card small className="mb-4">
                    <ListGroup flush >
                        <ListGroupItem className="p-3" style={{ height: '800px' }}>
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            {/* Username */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feUsername">Username</label>
                                                <FormInput
                                                    id="feUserName"
                                                    placeholder="Username"
                                                    value="Tam"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* Driver */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feName">Driver</label>
                                                <FormInput
                                                    id="feDriverName"
                                                    placeholder="Driver"
                                                    value="Ton"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Create at */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feTime">Create at</label>
                                                <FormInput
                                                    type="time"
                                                    id="feCreateAt"
                                                    placeholder="Create At"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* Update at */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feTime">Update at</label>
                                                <FormInput
                                                    type="time"
                                                    id="feUpdateAt"
                                                    placeholder="Update At"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Shop */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feName">Shop</label>
                                                <FormInput
                                                    id="feShopName"
                                                    value="Vinmart"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* Discount  */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feNumber">Discount</label>
                                                <FormInput
                                                    id="feDiscount"
                                                    value="10%"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Products */}
                                            <Col md="12" className="form-group">
                                                <ProductTable />
                                            </Col>
                                        </Row>
                                        <Row form >
                                            {/* Gross Total */}
                                            <Col md="6" className={order.Total}>
                                                <label htmlFor="feName" style={{color:'red'}}>Gross Total</label>
                                                <FormInput
                                                    id="feGrossTotal"
                                                    placeholder="Gross Total"
                                                    value="40.000 VND"
                                                    onChange={() => { }} />
                                            </Col>

                                            {/* Total Paid */}
                                            <Col md="6"  className={order.Total}>
                                                <label htmlFor="feName" style={{color:'green'}}>Total Paid</label>
                                                <FormInput
                                                    id="feTotalPaid"
                                                    placeholder="Total Paid"
                                                    value="36.000 VND"
                                                    onChange={() => { }} />
                                            </Col>

                                        </Row>

                                    </Form>
                                </Col>
                            </Row>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

            </Col>
        </Row>
    </Container>
);


export default OrderDetail;