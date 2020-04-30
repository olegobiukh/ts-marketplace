import "./index.scss";

import React from "react";
import uid from "uid";

const img =
  "https://elab.stylemixthemes.com/demo-6/wp-content/uploads/sites/9/2019/03/slider-banners-1920x550-07-1917x549.jpg";

function CatalogItems() {
  const items: {
    id: number;
    image: string;
    title: string;
    price: number;
  }[] = [
    {
      id: 0,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/04/macbook-1-799x799-270x270.png",
      title: "AA EliteBook G2",
      price: 1300,
    },
    {
      id: 1,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/04/macbook-1-799x799-270x270.png",
      title: "AA EliteBook G2",
      price: 1300,
    },
    {
      id: 2,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/04/macbook-1-799x799-270x270.png",
      title: "AA EliteBook G2",
      price: 1300,
    },
    {
      id: 3,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/04/macbook-1-799x799-270x270.png",
      title: "AA EliteBook G2",
      price: 1300,
    },
    {
      id: 4,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/04/macbook-1-799x799-270x270.png",
      title: "AA EliteBook G2",
      price: 1300,
    },
  ];

  const newItems = items.map((item) => (
    <article key={uid()} className={`catalog__item`}>
      <div className="catalog__item-top">
        <img src={item.image} alt={item.title} className={`catalog__image`} />
      </div>
      <div className="catalog__item-bottom">
        <h3 className="catalog__title">{item.title}</h3>
        <span className="catalog__price">${item.price}</span>
      </div>
    </article>
  ));

  return <section className={`catalog__items`}>{newItems}</section>;
}

export default CatalogItems;
