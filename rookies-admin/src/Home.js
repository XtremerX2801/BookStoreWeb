import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>This is Admin page</h1>
      <button><Link to="/products">Click here to show all books</Link></button>
      <br></br>
      <button><Link to="/product-id/1">Click here to show a book</Link></button>
      <br></br>
      <button><Link to="/categories">Click here to show all categories</Link></button>
      <br></br>
      <button><Link to="/product-name">Click here to show all by names</Link></button>
      <br></br>
      <button><Link to="/product-category">Click here to show all by categories</Link></button>
    </>
  );
};

export default Home;