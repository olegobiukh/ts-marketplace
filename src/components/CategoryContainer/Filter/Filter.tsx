import "./index.scss";
import React, { useState } from "react";

import { Select } from "antd";
import { AiOutlineAppstore } from "react-icons/ai";
import { IoMdReorder } from "react-icons/io";
const { Option } = Select;

function Filter() {
  const [perPage, setPerPage] = useState(20);
  const [sortBy, setSortBy] = useState(0);

  return (
    <section className={`category-container__filter`}>
      <div className={`category-container__filter-left`} >
        <Select
          defaultValue={perPage}
          style={{ width: 120 }}
          onChange={(event) => setPerPage(event)}
        >
          <Option value={5}>5</Option>
          <Option value={10}>10</Option>
          <Option value={15}>15</Option>
          <Option value={20}>20</Option>
        </Select>
        <Select
          defaultValue={sortBy}
          style={{ width: 120 }}
          onChange={(event) => setSortBy(event)}
        >
          <Option value={0}>Default</Option>
          <Option value={1}>Price: low to high</Option>
          <Option value={2}>Price: high to low</Option>
        </Select>
      </div>
      <div className={`category-container__filter-right`}>
        <AiOutlineAppstore />
        <IoMdReorder />
      </div>
    </section>
  );
}

export default Filter;
