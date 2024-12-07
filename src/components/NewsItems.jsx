import React from "react";
import PropTypes from "prop-types";
import "../style.css";
import { Link } from "react-router-dom";

const NewsItems = ({ title, description, url, author, urlToImage, date }) => {
  return (
    <>
      <div className="cardHolder bg-[#fff] pb-10 p-2 w-[85vw] md:w-[68%] lg:w-[30%] 2xl:h-[65vmin] 2xl:pb-10">
        <div className="ImageHolder ">
          <img src={urlToImage} />
        </div>

        <div className="textHolder flex flex-col  justify-center gap-y-4">
          <h1 className="title  text-[4vmin] lg:text-[3vmin]">{title}</h1>

          <p className="supportText1 pl-2 pr-2 text-[3.5vmin] md:text-[2.35vmin]">
            <b>Author:</b>&nbsp;{author}
          </p>
          <p className="supportText3 pl-2  text-[3.5vmin] md:text-[2.25vmin]">
            <a href={url} target="_blank">
              Read More...
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default NewsItems;
