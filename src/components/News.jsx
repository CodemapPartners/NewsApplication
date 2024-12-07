import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";
import NewsItems from "./NewsItems";
const News = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=Adani&from=2024-11-07&sortBy=publishedAt&apiKey=${
          import.meta.env.VITE_APP_ApiKey
        }`
      )
      .then((res) => {
        setData(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-10 mt-6 pb-10">
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
