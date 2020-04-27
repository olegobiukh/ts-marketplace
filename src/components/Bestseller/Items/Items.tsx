import React from "react";
import uid from "uid";

function Items({ text = "sdf", type = "default" }) {
  const items = [
    {
      title: "White Solo 5 Wireless",
      price: 129,
      sale: 100,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/05/HUAWEI-MateBook-599x599-240x275.png",
    },
    {
      title: "White Solo 5 Wireless",
      price: 129,
      sale: 100,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/05/HUAWEI-MateBook-599x599-240x275.png",
    },
    {
      title: "White Solo 5 Wireless",
      price: 129,
      sale: 100,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/05/HUAWEI-MateBook-599x599-240x275.png",
    },
    {
      title: "White Solo 5 Wireless",
      price: 129,
      sale: 100,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/05/HUAWEI-MateBook-599x599-240x275.png",
    },
    {
      title: "White Solo 5 Wireless",
      price: 129,
      sale: 100,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/05/HUAWEI-MateBook-599x599-240x275.png",
    },
    {
      title: "White Solo 5 Wireless",
      price: 129,
      sale: 100,
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/9/2019/05/HUAWEI-MateBook-599x599-240x275.png",
    },
  ];
  return (
    <div className="bestseller__items">
      {items.map((item) => (
        <article key={uid()} className="item-mini">
          <div className="item-mini__image-wrapper">
            <img
              src={item.image}
              alt={item.title}
              className="item-mini__image"
            />
          </div>
          <div className="item-mini__left">
            <h3 className={`bestseller__name`}>{item.title}</h3>
            <p className={`bestseller__pricing`}>
              <s className={`bestseller__price`}>${item.price}.00</s>
              <b className={`bestseller__sale`}>${item.sale}.00</b>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Items;
