import React, { Component } from 'react';
import Modal from './Modal';

export default class OrderItem extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Open</td>
                    <td>Tam</td>
                    <td>VinMart</td>
                    <td>Ton</td>
                    <td>100.000 VND</td>
                    <td>
                        <div>
                            <Modal />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Open</td>
                    <td>Tam</td>
                    <td>VinMart</td>
                    <td>Ton</td>
                    <td>100.000 VND</td>
                    <td>
                        <div>
                            <Modal />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Open</td>
                    <td>Tam</td>
                    <td>VinMart</td>
                    <td>Ton</td>
                    <td>100.000 VND</td>
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
