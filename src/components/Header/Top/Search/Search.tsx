import "./index.scss";

import { IoIosSearch } from "react-icons/io";
import { Input } from "antd";

import React, { useState } from "react";
import CustomSelect from "./CustomSelect";
function Search() {
  // const [secondCity, setCity] = useState();
  // const cities = ["Hangzhou", "Ningbo", "Wenzhou"];

  // const onSecondCityChange = (value: any) => {
  //   setCity(value);
  // };

  return (
    <div className={`search`}>
      <Input
        placeholder="What are you looking for?"
        className={`search__input`}
      />
      <CustomSelect />
        {/* <option value="all">All categories</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))} */}
      <IoIosSearch className={`search__icon`} />
    </div>
  );
}

export default Search;
