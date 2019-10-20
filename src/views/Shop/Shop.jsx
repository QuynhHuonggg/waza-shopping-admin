
import React, { Component } from "react";
import ShopList from './ShopList';


class Shop extends Component {
  render() {
    return (
      <div className="shop">
        <div className="shop-table">
          <ShopList />
        </div>
      </div>
    );
  }
}

export default Shop;
