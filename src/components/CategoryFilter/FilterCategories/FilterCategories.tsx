import "./index.scss";
import {
  AiOutlineAppstore,
  AiOutlineCamera,
  AiOutlineLaptop,
} from "react-icons/ai";
import { FaGamepad } from "react-icons/fa";
import {
  GiJoystick,
  GiProtectionGlasses,
  GiSpaceSuit,
  GiSmartphone,
} from "react-icons/gi";
import { FiHeadphones, FiSpeaker } from "react-icons/fi";
import { BsPhone, BsTablet, BsPlus } from "react-icons/bs";
import { IoIosHammer } from "react-icons/io";
import { RiComputerLine, RiShoppingBagLine } from "react-icons/ri";
import { GoWatch } from "react-icons/go";

import React, { useState } from "react";
import uid from "uid";

function FilterCategories() {
  const [openedItem, setOpenedCategory] = useState(100);

  const toggleCategory = (id: number) => {
    if (id === openedItem) {
      setOpenedCategory(100);
    } else {
      setOpenedCategory(id);
    }
  };

  const filterItems = [
    {
      id: 0,
      title: "Accessories",
      icon: <AiOutlineAppstore />,
      subitems: [
        {
          title: "Bags",
          icon: <RiShoppingBagLine />,
        },
      ],
    },
    {
      id: 1,
      title: "Cameras and Photos",
      icon: <AiOutlineCamera />,
    },
    {
      id: 2,
      title: "Computers",
      icon: <AiOutlineLaptop />,
      subitems: [
        {
          title: "Laptops",
          icon: <AiOutlineLaptop />,
        },
      ],
    },
    {
      id: 3,
      title: "Consoles & Games",
      icon: <FaGamepad />,
      subitems: [
        {
          title: "digital games",
          icon: <FaGamepad />,
        },
        {
          title: "game controllers",
          icon: <FaGamepad />,
        },
        {
          title: "gamepads",
          icon: <FaGamepad />,
        },
        {
          title: "joysticks",
          icon: <GiJoystick />,
        },
        {
          title: "video games",
          icon: <GiSpaceSuit />,
        },
        {
          title: "virtual reality",
          icon: <GiProtectionGlasses />,
        },
      ],
    },
    {
      id: 4,
      title: "Gagets",
      icon: <FiHeadphones />,
      subitems: [
        {
          title: "Headphones",
          icon: <FiHeadphones />,
        },
        {
          title: "Watches",
          icon: <GoWatch />,
        },
      ],
    },
    {
      id: 5,
      title: "mobile & tablets",
      icon: <BsPhone />,
      subitems: [
        {
          title: "tablets",
          icon: <BsTablet />,
        },
        {
          title: "iPhones",
          icon: <BsPhone />,
        },
        {
          title: "Smartphones",
          icon: <GiSmartphone />,
        },
      ],
    },
    {
      id: 6,
      title: "tools & storage",
      icon: <IoIosHammer />,
    },
    {
      id: 7,
      title: "TV's & audio",
      icon: <RiComputerLine />,
      subitems: [
        {
          title: "LED & LCD TV's",
          icon: <RiComputerLine />,
        },
        {
          title: "Media players",
          icon: <RiComputerLine />,
        },
        {
          title: "OLED TV's",
          icon: <RiComputerLine />,
        },
        {
          title: "speakers",
          icon: <FiSpeaker />,
        },
      ],
    },
  ];

  const setItems = (items: any[]) => {
    return items.map((item) => (
      <>
        <li key={uid()} className={`filter-categories__item`}>
          <div key={uid()} className={`filter-categories__left`}>
            {item.icon}
            <span className={`filter-categories__title`}>{item.title}</span>
          </div>
          {item.subitems && (
            <BsPlus
              className={`filter-categories__plus`}
              onClick={() => toggleCategory(item.id)}
            />
          ) }
        </li>
        <>
          {openedItem === item.id && item.subitems && item.subitems.map((subitem: { title: React.ReactNode; }) => (
            <li key={uid()} className={`filter-categories__item filter-categories__item--sub`}>
              <div key={uid()} className={`filter-categories__item`}>
                {item.icon}
                <span className={`filter-categories__title`}>
                  {subitem.title}
                </span>
              </div>
            </li>
          ))}
        </>
      </>
    ));
  };

  return <ul className={`filter-categories`}>{setItems(filterItems)}</ul>;
}

export default FilterCategories;
