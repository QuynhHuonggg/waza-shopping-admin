import React, { Component } from "react";
import OrderList from './OrderList';

class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="order-table">
          <OrderList />
        </div>
      </div>
    );
  }
}

export default Order;

