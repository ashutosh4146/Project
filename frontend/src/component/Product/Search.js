import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import MetaData from "../layout/MetaData";
import "./Search.css";

const Search = () => {
  const [keyword, setKeyword] = useState("");
  let navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      //   history.push(`/products/${keyword}`);
      //   console.log(`/products/${keyword}`);
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
      //   history.push("/products/");
    }
  };
  return (
    <Fragment>
      <MetaData title="Search A Product -- ECOMMERCE" />
      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          type="text"
          placeholder="Search a Product ..."
          onChange={(e) => setKeyword(e.target.value)}
        />

        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
