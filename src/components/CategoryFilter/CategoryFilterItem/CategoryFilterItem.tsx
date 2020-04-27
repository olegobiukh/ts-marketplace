import "./index.scss";

import React from "react";

function CategoryFilterItem(props: { title: React.ReactNode; children: React.ReactNode; }) {
  return (
    <section className={`categoryFilterItem`}>
      <h3 className={`categoryFilterItem__title`}>{props.title}</h3>
      {props.children}
    </section>
  );
}

export default CategoryFilterItem;
