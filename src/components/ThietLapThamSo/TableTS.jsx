import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import HeaderTable from './HeaderTable';
import BodyTable from './BodyTable';
import ThamSo from "../ThamSo/ThamSo.module.scss"

const data = [
    {val1: 'adobe.com', val2: '742', val3: '123'},
    {val1: 'adobe.com', val2: '742', val3: '123'},
    {val1: 'adobe.com', val2: '742', val3: '123'},
    {val1: 'adobe.com', val2: '742', val3: '123'},
    {val1: 'adobe.com', val2: '742', val3: '123'},
]
class TableTS extends Component {
    render() {
        const result = data.map((d, idx) => {
            return <BodyTable key={idx} val1={d.val1} val2={d.val2} val3={d.val3} val4={d.val4} />
        })
        return (
            <div className={ThamSo.TableContent}>
                <Table className={ThamSo.table} striped bordered hover>
                        <thead>
                            <HeaderTable elm1="Tên tham số" elm2="Kiểu dữ liệu" elm3="Ý nghĩa" elm4="" />
                        </thead>
                        <tbody>
                           {result}
                        </tbody>
                    </Table>
            </div>

            
        );
    }
}

export default TableTS;
