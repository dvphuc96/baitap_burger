import React, { Component } from "react";
import { Outlet } from "react-router-dom";
export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <div style={{ minHeight: "800px" }}>
          <Outlet />
          <footer className="bg-dark text-white text-center pt-5">Footer</footer>
        </div>
      </div>
    );
  }
}
