
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import './App.css';
import GetBooks from './GetBooks';
import GetBooksByCategory from "./GetBooksByCategory";
import GetBooksByName from "./GetBooksByName";
import React from "react";
import GetBookById from './GetBookById';
import GetCategories from './GetCategories';
import GetCategoryById from './GetCategoryById';
import GetCategoryByName from './GetCategoryByName';
import CreateNewBook from "./CreateNewBook";
import CreateNewCategory from "./CreateNewCategory";

class App extends React.Component {

  render() {
    return (
      <React.Fragment>
          <Router>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/product-id/:bookid" element={<GetBookById/>} />
            <Route path="/products" element={<GetBooks />} />
            <Route path="/product-name/:bookname" element={<GetBooksByName />} />
            <Route path="/product-category/:bookcategory" element={<GetBooksByCategory />} />
            <Route path="/product-create" element={<CreateNewBook />} />

            <Route path="/categories" element={<GetCategories />} />
            <Route path="/category-id/:categoryid" element={<GetCategoryById/>} />
            <Route path="/category-name/:categoryname" element={<GetCategoryByName/>} />
            <Route path="/category-create" element={<CreateNewCategory />} />
          </Routes>
        </Router>
      </React.Fragment>
    )
  }

  // return (
  //     <div className="App">
        
  //     </div>
  // );
}

export default App;
