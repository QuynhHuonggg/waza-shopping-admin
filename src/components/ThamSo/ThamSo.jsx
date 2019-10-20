
import React, { Component } from "react";
import { Grid, Row, Col, Table, ButtonToolbar, Button, Form, NavDropdown, MenuItem ,DropdownButton,Modal} from "react-bootstrap";
// import Card from "components/Card/Card.jsx";
// import { thArray, tdArray } from "variables/Variables.jsx";
import TableTS from "components/ThietLapThamSo/TableTS";
import ThamSo from "./ThamSo.module.scss";
import MyModal from "./Modal.jsx";


export default class ThietLapThamSo extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <div className={ThamSo.container}>
            <form action="" className={ThamSo.Form}>
              <div>
                <p>Thêm tham số:</p>
                <input type="text"></input>
              </div>
              <div>
              <p>Kiểu dữ liệu:</p>
              { <DropdownButton className={ThamSo.dropdown} id="dropdown-basic-button" title="Double">
               <MenuItem  eventKey={2.1}>Action</MenuItem>
                <MenuItem eventKey={2.2}>Another action</MenuItem>
                <MenuItem eventKey={2.3}>Something</MenuItem>
              </DropdownButton> }
              </div>
              <div>
                <p>Ghi chú</p>
                <input type="text"></input>
              </div>
              <div className={ThamSo.thamso}>
             <MyModal/>
              </div>
            </form>
          </div>
          <div>
            <TableTS/>
          </div>
          </Grid>
      </div>
    );
  }
}
