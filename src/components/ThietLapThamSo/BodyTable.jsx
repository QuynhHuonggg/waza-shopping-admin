import React, { Component } from 'react';
import { TiPencil } from 'react-icons/ti';
import { GoTrashcan } from 'react-icons/go';
export default class BodyTableclass extends Component {
    render() {
        return (
            <tr>
                <td>{this.props.val1}</td>
                <td>{this.props.val2}</td>
                <td>{this.props.val3}</td>
                <td>{this.props.val4}
                    <a style={{ float: 'right', fontSize: '30px', color: '#0080FF' }} href="#">
                        <TiPencil />
                        <GoTrashcan />
                    </a>
                </td>
            </tr>
        );
    }
}
;