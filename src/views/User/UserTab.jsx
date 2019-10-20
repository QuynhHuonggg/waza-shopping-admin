
import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import UserList from './UserList';
import user from './User.module.scss';

export default function ControlledTabs() {
    const [key, setKey] = useState('driver');

    return (
        <Tabs id="controlled-tab-example" activeKey={key} onSelect={k => setKey(k)} className={user.tab}>
            <Tab eventKey="driver" title="Driver" default>
                <UserList />
            </Tab>
            <Tab eventKey="customer" title="Customer">
                <UserList />
            </Tab>
        </Tabs>
    );
}
