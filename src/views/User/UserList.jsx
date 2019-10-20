import React, { Component } from 'react';
import { Row, Col, Card, CardHeader, CardBody } from "shards-react";

import UserItem from './UserItem';
import user from './User.module.scss';

class UserList extends Component {

    render() {

        return (
            <div >
                <Row className={user.row}>
                    <Col>
                        <Card small className="mb-4">
                            <CardHeader className="border-bottom">
                                <h6 className={user.title}>User List</h6>
                            </CardHeader>
                            <CardBody className="p-0 pb-3">
                                <table className="table mb-0">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="border-0">Id</th>
                                            <th scope="col" className="border-0">Create At</th>
                                            <th scope="col" className="border-0">Update At</th>
                                            <th scope="col" className="border-0">Active</th>
                                        </tr>
                                    </thead>
                                    <UserItem />
                                </table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default UserList;
