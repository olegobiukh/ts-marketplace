import "./index.scss";
import React from "react";
import Main from "../../components/product/Main";
import { AiOutlineClose } from "react-icons/ai";
import ProductTabs from "../../components/product/ProductTabs";
import uid from "uid";
// import CategoryFilter from "../../components/CategoryFilter";
// import CategoryContainer from "../../components/CategoryContainer";

function Wishlist() {
  type itemsType = {
    title: string;
    price: number;
    sale: number;
    image: string;
  }[];

  const items: itemsType = [
    {
      title: "Smartwatch 2.0",
      price: 199,
      sale: 220,
      image:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/watch-red-2-768x768.png",
    },
    {
      title: "ZZ Amazfit SmartWatch",
      price: 174,
      sale: 144,
      image:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/amazfit_equator_rose_gold_closed_loop-220x220.png",
    },
  ];

  const renderItems = items.map((item) => (
    <div key={uid()} className="wishlist__item">
      <div className="wishlist__box">
        <img
          src={item.image}
          alt={`item.title`}
          className={`wishlist__image`}
        />
        <h2 className="wishlist__title">{item.title}</h2>
      </div>
      <div className="wishlist__box">
        <p className="wishlist__pricing">
          <s className={`wishlist__sale`}>{item.sale}</s>
          <strong className={`wishlist__price`}>{item.price}</strong>
        </p>
        <button type="button" className="wishlist__button">
          add to cart
        </button>
      </div>
      <AiOutlineClose className={`wishlist__close`} />
    </div>
  ));

  return (
    <main className={`wishlist`}>
      <div className="wishlist__head">
        <span></span>
        <h2 className={`wishlist__heading`}>product</h2>
        <h2 className={`wishlist__heading`}>price</h2>
        <h2 className={`wishlist__heading`}>buy</h2>
      </div>
      <div className="wishlist__body">{renderItems}</div>
    </main>
  );
}

export default Wishlist;
