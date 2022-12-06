import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/burger.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import HomeTemplate from "./templates/HomeTemplate";
import BaiTapBurger from "./page/BaiTapBurger/BaiTapBurger";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="" element={<HomeTemplate />}>
              <Route index element={<BaiTapBurger />}></Route>
              <Route path="*" element={<Navigate to="" />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </>
);
