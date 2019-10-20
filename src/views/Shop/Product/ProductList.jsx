import React, {Component} from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";
import { TiPlus } from 'react-icons/ti';

import product from './Product.module.scss';
import ProductItem from './ProductItem';

class ProductList extends Component {
    render() {
        return(
            <div >
                <Row className={product.row}>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className={product.title}>Product</h6>
                                <a href="#" className={product.createBtn}><TiPlus/>CREATE</a>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Id</th>
                                            <th scope="col" className="border-0">Name</th>
                                            <th scope="col" className="border-0">Type</th>
                                            <th scope="col" className="border-0">Price</th>
                                            <th scope="col" className="border-0"></th>
                                        </tr>
                                    </thead>
                                    <ProductItem />
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ProductList;