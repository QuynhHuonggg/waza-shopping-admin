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
import ProductList from './Product/ProductList';

const ShopDetail = () => (
    <Container fluid className="main-content-container px-4">
        <Row>
            <Col>
                <Card small className="mb-4">
                    <ListGroup flush >
                        <ListGroupItem className="p-3" style={{height: '800px'}}>
                            <Row>
                                <Col>
                                    <Form>
                                        <Row form>
                                            {/* Shop Name */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feName">Shop Name</label>
                                                <FormInput
                                                    id="feShopName"
                                                    placeholder="Shop Name"
                                                    value="ABC Shop"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* Phone */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="fePhone">Phone</label>
                                                <FormInput
                                                    type="phone"
                                                    id="fePhone"
                                                    placeholder="Phone"
                                                    value="0589465577"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Open Time */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feTime">Open time</label>
                                                <FormInput
                                                    type="time"
                                                    id="feOpenTime"
                                                    placeholder="Open Time"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* Close Time */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feTime">Close time</label>
                                                <FormInput
                                                    type="time"
                                                    id="feCloseTime"
                                                    placeholder="Close Time"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Address */}
                                            <Col md="12" className="form-group">
                                                <label htmlFor="feAddress">Address</label>
                                                <FormInput
                                                    id="feAddress"
                                                    placeholder="Address"
                                                    value="1234 Main St."
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Ward */}
                                            <Col md="2" className="form-group">
                                                <label htmlFor="feWard">Ward</label>
                                                <FormInput
                                                    id="feWard"
                                                    placeholder="Ward"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* District */}
                                            <Col md="4" className="form-group">
                                                <label htmlFor="feDistrict">District</label>
                                                <FormInput
                                                    id="feDistrict"
                                                    placeholder="District"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                            {/* City */}
                                            <Col md="6" className="form-group">
                                                <label htmlFor="feCity">City</label>
                                                <FormInput
                                                    id="feCity"
                                                    placeholder="City"
                                                    onChange={() => { }}
                                                />
                                            </Col>
                                        </Row>
                                        <Row form>
                                            {/* Products */}
                                            <Col md="12" className="form-group">
                                                <ProductList />
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


export default ShopDetail;