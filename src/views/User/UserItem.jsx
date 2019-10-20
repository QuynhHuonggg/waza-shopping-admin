import React, { Component } from 'react';
import Modal from './Modal';



export default class UserItem extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>1</td>
                    <td>1/10/2019</td>
                    <td>3/10/2019</td>
                    <td>Active Now</td>
                    <td>
                        <div>
                            <Modal />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>1/10/2019</td>
                    <td>3/10/2019</td>
                    <td>Active 3 hour ago</td>
                    <td>
                        <div>
                            <Modal />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>1/10/2019</td>
                    <td>3/10/2019</td>
                    <td>Active 2 hour ago</td>
                    <td>
                        <div>
                            <Modal />
                        </div>
                    </td>
                </tr>
            </tbody>

        );
    }
}
