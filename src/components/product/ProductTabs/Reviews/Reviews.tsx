import "./index.scss";

import React, { useState } from "react";
import uid from "uid";
import { Rate } from "antd";
import Filter from "../../../CategoryContainer/Filter";

function Reviews() {
  const reviews = [
    {
      name: "Oleg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      rate: 5,
    },
    {
      name: "Oleg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      rate: 3,
    },
    {
      name: "Oleg",
      review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      rate: 5,
    },
  ];

  const filteredByRate: any = reviews.filter((item) =>
    item.hasOwnProperty('rate')
  );
  const rate = filteredByRate.reduce((acc: number, item: { rate: number; }) => acc + item.rate, 0);
  const filteredByRateAmount = filteredByRate.length;
  const mainRate = Math.round(rate / filteredByRateAmount);

  const newReviews = (items: any[]) => {
    return items.map((item) => (
      <article key={uid()} className={`reviews__item`}>
        <h4 className={`reviews__name`}>{item.name}</h4>
        <Rate disabled defaultValue={item.rate} />
        <p className={`reviews__text`}>{item.review}</p>
      </article>
    ));
  };

  return (
    <div className={`reviews`}>
      <h3 className={`reviews__title`}>
        Reviews <Rate disabled defaultValue={mainRate} />
      </h3>
      <div className={`reviews__container`}>{newReviews(reviews)}</div>
    </div>
  );
}

export default Reviews;
