import React, { Component } from 'react';
import { TiDelete } from 'react-icons/ti';
import { Button } from 'react-bootstrap'

export default class ProductItem extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Carrot</td>
                    <td>Vegetable</td>
                    <td>6000/g</td>
                    <td>
                        <Button variant="primary" style={{ border: "none" }}>
                            <TiDelete style={{ color: "red" }} />
                        </Button>
                    </td>
                </tr>

                <tr>
                    <td>2</td>
                    <td>Carrot</td>
                    <td>Vegetable</td>
                    <td>6000/g</td>
                    <td>
                        <Button variant="primary" style={{ border: "none" }}>
                            <TiDelete style={{ color: "red" }} />
                        </Button>
                    </td>
                </tr>

                <tr>
                    <td>3</td>
                    <td>Carrot</td>
                    <td>Vegetable</td>
                    <td>6000/g</td>
                    <td>
                        <Button variant="primary" style={{ border: "none" }}>
                            <TiDelete style={{ color: "red" }} />
                        </Button>
                    </td>
                </tr>

                <tr>
                    <td>4</td>
                    <td>Carrot</td>
                    <td>Vegetable</td>
                    <td>6000/g</td>
                    <td>
                        <Button variant="primary" style={{ border: "none" }}>
                            <TiDelete style={{ color: "red" }} />
                        </Button>
                    </td>
                </tr>

                <tr>
                    <td>5</td>
                    <td>Carrot</td>
                    <td>Vegetable</td>
                    <td>6000/g</td>
                    <td>
                        <Button variant="primary" style={{ border: "none" }}>
                            <TiDelete style={{ color: "red" }} />
                        </Button>
                    </td>
                </tr>
            </tbody>

        );
    }
}
