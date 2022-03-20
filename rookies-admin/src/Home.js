import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {

  return (
    <>
      <h1>This is Admin page</h1>
      <button><Link to="/products">SHOW ALL PRODUCTS</Link></button>
      <br></br>
      <button><Link to="/product-create">CREATE NEW PRODUCTS</Link></button>
      <br></br>
      <button><Link to="/categories">SHOW ALL CATEGORIES</Link></button>
      <br></br>
      <button><Link to="/category-create">CREATE NEW CATEGORIES</Link></button>
    </>
  );
};

export default Home;