import "../../assets/styles/list.scss";

import React, { ReactNode, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import uid from "uid";

function Wishlist() {
  type itemsType = {
    id: number,
    title: string;
    price: number;
    sale: number;
    image: string;
  }[];

  const initialItems: itemsType = [
    {
      id: 0,
      title: "Smartwatch 2.0",
      price: 199,
      sale: 220,
      image:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/watch-red-2-768x768.png",
    },
    {
      id: 1,
      title: "ZZ Amazfit SmartWatch",
      price: 174,
      sale: 144,
      image:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/amazfit_equator_rose_gold_closed_loop-220x220.png",
    },
  ];

  const [items, seItems] = useState(initialItems);
  
  const deleteItem = (id: any) => {
    const newItems = [...items].filter((item) => item.id === id);
    seItems(newItems);
  };
  
  const headers: string[] = ["product", "price", "buy"];

  const renderItems: any = items.map(
    (item: {
      id: number,
      image: string | undefined;
      title: string;
      sale: number;
      price: number;
    }) => (
      <div key={uid()} className="list__item">
        <div className="list__box">
          <img src={item.image} alt={`item.title`} className={`list__image`} />
          <h2 className="list__title">{item.title}</h2>
        </div>
        <div className="list__box">
          <p className="list__pricing">
            {item.sale && <s className={`list__sale`}>${item.sale}</s>}
            <strong className={`list__price`}>${item.price}</strong>
          </p>
          <button type="button" className="list__button">
            add to cart
          </button>
        </div>
        <AiOutlineClose
          className={`list__close`}
          onClick={() => deleteItem(item.id)}
        />
      </div>
    )
  );

  const newHeaders = headers.map((item: React.ReactNode) => (
    <h2 key={uid()} className={`wishlist__heading`}>
      {item}
    </h2>
  ));

  return (
    <main className={`list`}>
      <div className="list__head">
        <span></span>
        {newHeaders}
      </div>
      <div className="list__body">{renderItems}</div>
    </main>
  );
}

export default Wishlist;
