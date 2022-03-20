
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
import UpdateBook from "./UpdateBook";
import UpdateCategory from "./UpdateCategory";
import DeleteBook from "./DeleteBook";
import DeleteCategory from "./DeleteCategory";

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
            <Route path="/product-update/:bookid" element={<UpdateBook />} />
            <Route path="/product-delete/:bookid" element={<DeleteBook />} />

            <Route path="/categories" element={<GetCategories />} />
            <Route path="/category-id/:categoryid" element={<GetCategoryById/>} />
            <Route path="/category-name/:categoryname" element={<GetCategoryByName/>} />
            <Route path="/category-create" element={<CreateNewCategory />} />
            <Route path="/category-update/:categoryid" element={<UpdateCategory />} />
            <Route path="/category-delete/:categoryid" element={<DeleteCategory />} />
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
