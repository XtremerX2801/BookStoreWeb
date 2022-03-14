import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <h1>This is Admin page</h1>
      <Link to="/products">Click here to show all books</Link>
      <br></br>
      <Link to="/product-id/1">Click here to show a book</Link>
    </>
  );
};

export default Home;