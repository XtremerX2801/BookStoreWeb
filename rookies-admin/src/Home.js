import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>This is Admin page</h1>
      <Link to="/products">Click here to show all books</Link>
      <Link to="/product-id">Click here to show a book</Link>
    </>
  );
};

export default Home;