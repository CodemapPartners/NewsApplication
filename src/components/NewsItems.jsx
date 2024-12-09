import React from "react";
import PropTypes from "prop-types";
import "../style.css";
import { Link } from "react-router-dom";

const NewsItems = ({ title, description, url, author, urlToImage, date }) => {
  return (
    <>
      <div className="cardHolder bg-[#dcdcdc] p-1 pb-6  w-[85vw] md:w-[68%] lg:w-[30%] lg:h-[60vmin] 2xl:h-[59vmin]  2xl:pb-3 rounded-lg">
        <div className="ImageHolder h-[50vmin] lg:h-[33vmin]   w-[100%] flex justify-center items-center">
          <img
             src={
              urlToImage
                ? urlToImage
                : "https://propertywiselaunceston.com.au/wp-content/themes/property-wise/images/no-image@2x.png"
            }
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="textHolder flex flex-col  justify-center gap-y-5">
          <h1 className="title  text-[4vmin] lg:text-[3vmin]">
            {title.slice(0, 35) + "..."}
          </h1>

          <p className="supportText1 pl-2 pr-2 text-[3.5vmin] md:text-[2.35vmin]">
            <b>Author:</b>&nbsp;{!author ? "self source" : author}
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
