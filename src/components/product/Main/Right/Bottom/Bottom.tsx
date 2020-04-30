import "./index.scss";
import "./icons.scss";

import React, { useState } from "react";
import uid from "uid";
import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  AiOutlineShareAlt,
  AiOutlineHeart,
} from "react-icons/ai";
import { TiSocialInstagram } from "react-icons/ti";
import { MdCompareArrows } from "react-icons/md";
import { RiTwitterLine, RiPinterestLine } from "react-icons/ri";
import { Tooltip } from "antd";

function Bottom() {
  const items = [
    {
      title: "Compare",
      icon: <MdCompareArrows />,
    },
    {
      title: "Add to Wishlist",
      icon: <AiOutlineHeart />,
    },
    {
      title: "Share",
      icon: <AiOutlineShareAlt />,
      social: [
        {
          title: "facebook",
          url: "",
          icon: <AiOutlineFacebook />,
        },
        {
          title: "instagram",
          url: "",
          icon: <TiSocialInstagram />,
        },
        {
          title: "twitter",
          url: "",
          icon: <RiTwitterLine />,
        },
        {
          title: "linkedin",
          url: "",
          icon: <AiOutlineLinkedin />,
        },
        {
          title: "pinterest",
          url: "pinterest",
          icon: <RiPinterestLine />,
        },
      ],
    },
  ];

  const createSocial = (icons: any[] | undefined) => {
    return (
      <ul className={`icons`}>
        {icons &&
          icons.map((item) => (
            <li key={uid()} className={`icons__item`}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className={`icons__link`}>
                {item.icon}
              </a>
            </li>
          ))}
      </ul>
    );
  };

  const newItems = items.map((item) => (
    <>
      {item.title === "Share" ? (
        <Tooltip placement="bottomRight" title={createSocial(item.social)}>
          <li key={uid()} className={`product-main__bottom-item`}>
            <span className={`product-main__bottom-icon`}>{item.icon}</span>
            <span className={`product-main__bottom-title`}>{item.title}</span>
          </li>
        </Tooltip>
      ) : (
        <li key={uid()} className={`product-main__bottom-item`}>
          <span className={`product-main__bottom-icon`}>{item.icon}</span>
          <span className={`product-main__bottom-title`}>{item.title}</span>
        </li>
      )}
    </>
  ));

  return <ul className={`product-main__bottom`}>{newItems}</ul>;
}

export default Bottom;
