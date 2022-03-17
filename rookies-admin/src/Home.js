import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
console.log(props);

  return (
    <>
      <h1>This is Admin page</h1>
      <button><Link to="/products">SHOW ALL PRODUCTS</Link></button>
      <br></br>
      <button><Link to="/product-create">CREATE NEW PRODUCTS</Link></button>
      <br></br>
      <button><Link to="/categories">SHOW ALL CATEGORIES</Link></button>
    </>
  );
};

export default Home;