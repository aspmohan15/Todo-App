import React from "react";
import { useDispatch } from "react-redux";
import { toggleTab } from "../Redux/Todo/action";
import { TABS } from "../Redux/Todo/actionTypes";

function Tabs({ currentTab }) {
  const dispatch = useDispatch();
  return TABS.map((tab) => (
    <button
      style={{ marginTop: "2%" }}
      className={tab === currentTab ? "tab-button selected" : "tab-button"}
      onClick={() => dispatch(toggleTab(tab))}
    >
      {tab}
    </button>
  ));
}

export default Tabs;
