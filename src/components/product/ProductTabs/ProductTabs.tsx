import "./index.scss";

import React, { useState } from "react";
import uid from "uid";
import { Tabs, Rate, Input } from "antd";
import Reviews from "./Reviews";
const { TabPane } = Tabs;
const { TextArea } = Input;

function ProductTabs() {
  function callback(key: any) {
    console.log(key);
  }

  const description = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur sed do, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  ];
  const features = {
    Fit: "Over-Ear",
    "Noise Canceling": "Yes",
    Colors: "Blue, Matte Black, Red Shadow Gray, White, Blue",
    "Battery Life": "	Up to 22 hours with ANC Up to 40 hours without ANC",
    "Fast Fuel Charging": "Yes",
    Weight: "1.9 pounds",
    "Bluetooth® Wireless Connectivity*": "Yes",
    "AndroidTM Compatible": "Yes",
  };

  const additional = {
    Color: "Blue, Green, Red",
    Cable: "Yes, No",
  };

  const renderedDescription = description.map((item, index) => (
    <p key={uid()} className={`tabs-text`}>
      {item}
    </p>
  ));
  const renderedFeatures = (items: { [s: string]: any }) => {
    return Object.entries(items).map(([title, value]) => (
      <tr key={uid()} className={`tabs__tr`}>
        <td className={`tabs__td`}>{title}</td>
        <td className={`tabs__td`}>{value}</td>
      </tr>
    ));
  };

  return (
    <div className={`product-tabs`}>
      <Tabs defaultActiveKey="4" onChange={callback}>
        <TabPane tab="Description" key="1">
          {renderedDescription}
        </TabPane>
        <TabPane tab="Main features" key="2">
          <table className={`tabs__table`}>
            <tbody>{renderedFeatures(features)}</tbody>
          </table>
        </TabPane>
        <TabPane tab="Additional info" key="3">
          <table className={`tabs__table`}>
            <tbody>{renderedFeatures(additional)}</tbody>
          </table>
        </TabPane>
        <TabPane tab="Reviews" key="4">
          <form action="" method="post" className={`tabs__form`}>
            <div className="tabs__input-group">
              <span>Your rating</span>
              <Rate />
            </div>
            <div className="tabs__input-group">
              <span>Your review *</span>
              <TextArea />
            </div>
            <div className="tabs__input-group">
              <span>Name*</span>
              <Input />
            </div>
            <div className="tabs__input-group">
              <span>Email*</span>
              <Input />
            </div>
            <div className="tabs__input-group">
              <span></span>
              <button type="submit" className={`tabs__form-button`}>
                submit review
              </button>
            </div>
          </form>
          <Reviews />
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProductTabs;
