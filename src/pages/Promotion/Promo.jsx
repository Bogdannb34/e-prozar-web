import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import getProductsForCategory from "../../productList";

import "./Promo.css";

const currDate = new Date().toLocaleDateString("en-us", {
  month: "long",
  day: "numeric",
});

const Promo = () => {
  const productList1 = getProductsForCategory(1);
  const productList2 = getProductsForCategory(2);
  const productList3 = getProductsForCategory(3);
  const [randomProduct1] = useState(
    productList1[Math.floor(Math.random() * productList1.length)]
  );
  const [randomProduct2] = useState(
    productList2[Math.floor(Math.random() * productList2.length)]
  );
  const [randomProduct3] = useState(
    productList3[Math.floor(Math.random() * productList3.length)]
  );

  const randoms = [randomProduct1, randomProduct2, randomProduct3];

  const xth = currDate.split(" ").at(1) + "th";
  const month = currDate.split(" ").at(0);

  const discount = (price) => {
    return Math.round(0.5 * price);
  };

  const theLegend = (item) => {
    return `On the ${xth} of ${month} ${item.name}: from ${item.price} to ${
      "$" + discount(Number(item.price.substring(1))) + " !"
    }`;
  };

  return (
    <Carousel autoPlay infiniteLoop width={"50%"}>
      {randoms.map((item, index) => (
        <div key={index}>
          <img src={item.image} alt={item.name} />
          <p className="legend">{theLegend(item)}</p>
        </div>
      ))}
    </Carousel>
  );
};

export default Promo;
