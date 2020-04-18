import "./index.scss";

import { MdSubject } from "react-icons/md";
import {
  IoIosLaptop,
  IoLogoGameControllerB,
  IoMdHeadset,
  IoIosHammer,
  IoIosClose,
} from "react-icons/io";
import { GiPhotoCamera } from "react-icons/gi";
import { GoWatch } from "react-icons/go";
import { MdPhoneIphone, MdTv } from "react-icons/md";

import React, { useState } from "react";

function Categories() {
  const categories = [
    {
      icon: <IoIosLaptop color="#ffc400" />,
      title: "accessories",
      links: [
        "all accessories & supplies",
        "cables",
        "chargers & accessories",
        "vehicle electronics",
        "batteries",
        "power protection",
        "audio & video accessories",
      ],
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-8-1199x499-600x250.jpg",
    },
    {
      icon: <IoIosLaptop color="#ffc400" />,
      title: "computers",
      additionalTitle: "laptops",
      links: [
        "all computers & accessories",
        "desktops",
        "computer cases",
        "mouses",
        "laptops",
        "computer components",
        "servers",
        "keyboards",
      ],
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-4-1199x499-600x250.jpg",
    },
    {
      icon: <GiPhotoCamera color="#ffc400" />,
      title: "cameras & photos",
      additionalTitle: "camera",
      links: [
        "all cameras and photos",
        "microphones",
        "action video cameras",
        "lenses",
        "camera cases",
        "digiral cameras",
        "DSLR cameras",
        "reflectors",
      ],
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-12-1199x499-600x250.jpg",
    },
    {
      icon: <MdPhoneIphone color="#ffc400" />,
      title: "mobiles & tables",
      additionalTitle: "mobiles",
      links: [
        "all mobiles & tables",
        "tablets",
        "micro SD memory cards",
        "cell phone chargers",
        "smartphones",
        "cases & covers",
        "Landing Phones",
        "Selfie Sticks",
      ],
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-9-1199x499-600x250.jpg",
    },
    {
      icon: <MdTv color="#ffc400" />,
      title: "TV & audio",
      additionalTitle: "TV's",
      links: [
        " all tv’s & audio",
        "OLED TV's",
        "DVD Players & Recorders",
        "Projection Screens",
        "LED & LCD TVs",
        "Remote Controls",
        "Media Players",
      ],
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-2-1199x499-600x250.jpg",
    },
    {
      icon: <IoLogoGameControllerB color="#ffc400" />,
      title: "game consoles & games",
      additionalTitle: "consoles",
      links: [
        "All Game consoles",
        "Video Gamesfggd",
        "Virtual Reality",
        "Racing Wheels",
        "Joysticks",
        "Digital Games & DLC",
        "Game Controllers",
        "Gamepads",
      ],
      image:
        "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-7-1199x499-600x250.jpg",
    },
    {
      icon: <IoMdHeadset color="#ffc400" />,
      title: "gadgets",
      links: [
        "All Gadgets",
        "Alarm & Sensor",
        "Smart Home Appliances",
        "MP3 Players",
        "Smart Remote Controls",
        "Wearable Devices",
      ],
      // image: "https://elab.scdn8.secure.raxcdn.com/wp-content/uploads/sites/6/2019/03/banners-500x250-11-1199x499-600x250.jpg",
    },
    {
      icon: <IoIosHammer color="#ffc400" />,
      title: "tools & storage",
      links: [],
    },
    {
      icon: <GoWatch color="#ffc400" />,
      title: "watches",
      links: [],
    },
  ];

  const [title, setTitle] = useState(categories[0].title);
  const [isCategoriesOpen, toggleCategories] = useState(false);
  const [additionalTitle, setAdditionalTitle] = useState(categories[0].title);
  const [additionalImage, setAdditionalImage] = useState(categories[0].image);
  const [newLinks, setNewLinks] = useState(categories[0].links);

  const hoverItem = (index: number) => {
    const newLinks = categories[index].links;
    const newTitle: string = categories[index].title;
    const newAdditionalTitle: any = categories[index].hasOwnProperty(
      "additionalTitle"
    )
      ? categories[index].additionalTitle
      : categories[index].title;
    const newAdditionalImage: any = categories[index].hasOwnProperty("image")
      ? categories[index].image
      : null;

    setNewLinks(newLinks);
    setTitle(newTitle);
    setAdditionalTitle(newAdditionalTitle);
    setAdditionalImage(newAdditionalImage);
  };

  console.log(JSON.stringify(newLinks));
  const formedSections = newLinks.map((item, index) => (
    <li key={index} className={`categories-addition__item`}>
      {item}
    </li>
  ));
  return (
    <div className={`categories`}>
      <div className={`categories__title`}>
        Categories
        {isCategoriesOpen ? (
          <IoIosClose
            onClick={() => toggleCategories(false)}
            size={23}
            className={`categories__toggler`}
          />
        ) : (
          <MdSubject
            onClick={() => toggleCategories(true)}
            className={`categories__toggler`}
          />
        )}
      </div>
      {isCategoriesOpen && (
        <div className={`categories__container`}>
          <ul className={`categories__list`}>
            {categories.map((item, index) => (
              <li
                className={`categories__item`}
                key={item.title}
                onMouseOver={() => hoverItem(index)}
              >
                {item.icon}
                <span className={`categories__name`}>{item.title}</span>
              </li>
            ))}
          </ul>
          {newLinks.length > 0 && (
            <div className="categories-addition">
              <div className={`categories-addition__top`}>
                <h3 className="categories-addition__title">{title}</h3>
                <div className={`categories-addition__container`}>
                  <ul className={`categories-addition__list`}>
                    {formedSections}
                  </ul>
                </div>
              </div>
              <div
                className="categories-addition__banner"
                style={{
                  backgroundImage: `url(${additionalImage})`,
                }}
              >
                <p className="categories-addition__banner-text">
                  Looking for more?
                </p>
                <h3 className="categories-addition__banner-title">
                  Get $100 Voucher* <br /> for
                  <span className={`categories-addition__banner-title--normal`}>
                    {additionalTitle}
                  </span>
                </h3>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Categories;
