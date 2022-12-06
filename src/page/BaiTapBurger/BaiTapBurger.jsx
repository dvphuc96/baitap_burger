import React, { Component } from "react";
import { connect } from "react-redux";

class BaiTapBurger extends Component {
  renderBurger = () => {
    let { buger } = this.props;
    return Object.entries(buger).map(([topping, value], index) => {
      let arrTopping = [];
      for (let i = 0; i < value; i++) {
        arrTopping.push(<div key={i} className={topping}></div>);
      }
      return arrTopping;
    });
  };
  renderMenu = () => {
    let { menu, buger } = this.props;
    return Object.entries(menu).map(([propsMenu, value], index) => {
      return (
        <tr key={index}>
          <td>{propsMenu}</td>
          <td>
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleChangeQuantity(propsMenu, 1);
              }}
            >
              +
            </button>
            {buger[propsMenu]}
            <button
              className="btn btn-danger mx-2"
              onClick={() => {
                this.handleChangeQuantity(propsMenu, -1);
              }}
            >
              -
            </button>
          </td>
          <td>{value}</td>
          <td>{buger[propsMenu] * value}</td>
        </tr>
      );
    });
  };
  handleChangeQuantity = (name, quantity) => {
    const action = {
      type: "CHANGE_QUANTITY",
      name,
      quantity,
    };
    this.props.dispatch(action);
  };
  render() {
    let { total } = this.props;
    return (
      <div className="container">
        <h3>Bài tập buger</h3>
        <div className="row">
          <div className="col-6">
            <div>
              <div className="breadTop" />
              {this.renderBurger()}
              <div className="breadBottom" />
            </div>
          </div>
          <div className="col-6">
            <div>
              <h3>Menu</h3>
              <table className="table">
                <thead>
                  <tr>
                    <th>Thức ăn</th>
                    <th>Số lượng</th>
                    <th>Giá</th>
                    <th>Thành Tiền</th>
                  </tr>
                  {this.renderMenu()}
                </thead>
                <tfoot>
                  <tr>
                    <td colSpan="2" align="right"></td>
                    <td>Tổng tiền</td>
                    <td>{total}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    buger: state.burgerReducer.burger,
    menu: state.burgerReducer.menu,
    total: state.burgerReducer.total,
  };
};

export default connect(mapStateToProps)(BaiTapBurger);
