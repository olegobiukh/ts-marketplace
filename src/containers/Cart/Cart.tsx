import "../../assets/styles/list.scss";

import React, { useState, ReactNode } from "react";
import { AiOutlineClose } from "react-icons/ai";
import uid from "uid";

function Cart() {
  type itemsType = {
    title: string;
    id: number;
    price: number;
    sale: number;
    image: string;
    amount: number;
  }[];

  const initialItems: itemsType = [
    {
      id: 0,
      title: "Smartwatch 2.0",
      price: 199,
      sale: 220,
      amount: 1,
      image:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/watch-red-2-768x768.png",
    },
    {
      id: 1,
      title: "ZZ Amazfit SmartWatch",
      price: 174,
      sale: 144,
      amount: 1,
      image:
        "https://elab.scdn8.secure.raxcdn.com/demo-4/wp-content/uploads/sites/6/2019/04/amazfit_equator_rose_gold_closed_loop-220x220.png",
    },
  ];

  const [items, seItems] = useState(initialItems);

  const headers: string[] = ["product", "price", "buy"];

  const setAmount = (newAmount: string, index: any) => {
    const newItems = [...items];

    newItems[+index].amount = +newAmount;
    seItems(newItems);
  };

  const deleteItem = (id: any) => {
    const newItems = [...items].filter((item) => item.id === id);
    seItems(newItems);
  };

  const renderItems: any = items.map(
    (
      item: {
        id: number;
        title: string;
        price: number;
        sale: number;
        image: string;
        amount: number;
      },
      index
    ) => (
      <div key={uid()} className="list__item">
        <div className="list__box">
          <img src={item.image} alt={`item.title`} className={`list__image`} />
          <h2 className="list__title">{item.title}</h2>
        </div>
        <div className="list__box">
          <p className="list__pricing">
            <span className={`list__sale`}>${item.price}</span>
            <strong className={`list__price`}>
              ${item.price * item.amount}
            </strong>
          </p>
          <input
            type="number"
            className={`list__input`}
            value={item.amount}
            onChange={(event) => setAmount(event.target.value, index)}
          />
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

export default Cart;
