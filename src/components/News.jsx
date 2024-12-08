import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import NewsItems from "./NewsItems";
import { userContext } from "../Utils/userContext";
import { useContext } from "react";
const News = () => {
  const { category, setCategory, searchItem, setSearchItem } =
    useContext(userContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (category === "general" && searchItem === "") {
      axios
        .get(
          `https://newsapi.org/v2/everything?q=Adani&from=2024-11-08&sortBy=publishedAt&apiKey=${
            import.meta.env.VITE_APP_ApiKey
          }`
        )
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (searchItem != "" && category === "") {
      // console.log(searchItem);
      axios
        .get(
          `https://newsapi.org/v2/everything?q=tesla&from=2024-11-08&sortBy=publishedAt&apiKey=${
            import.meta.env.VITE_APP_ApiKey
          }`
        )
        .then((res) => {
          // setData(res.data.articles);
          console.log(res.data.articles);

          setData(res.data.articles.filter((val) => val.title === searchItem));
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      axios
        .get(
          `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${
            import.meta.env.VITE_APP_ApiKey
          }`
        )
        .then((res) => {
          setData(res.data.articles);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [category, searchItem]);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-x-7 gap-y-8 mt-6 pb-10">
        {(data.length > 0 &&
          data
            .filter((val) => val.urlToImage != null)
            .slice(0, 10) // Show only the first 10 articles
            .map((item, index) => <NewsItems {...item} />)) || (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        )}
      </div>
    </>
  );
};

export default News;
