
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

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {bookId: 5};
  }

  render() {
    return (
      <React.Fragment>
          <Router>
          <Routes>
            <Route path="/" element={<Home bookId={this.state.bookId}/>} />

            <Route path="/product-id/:bookid" element={<GetBookById/>} />
            <Route path="/products" element={<GetBooks />} />
            <Route path="/product-name/:bookname" element={<GetBooksByName />} />
            <Route path="/product-category/:bookcategory" element={<GetBooksByCategory />} />

            <Route path="/categories" element={<GetCategories />} />
            <Route path="/category-id/:categoryid" element={<GetCategoryById/>} />
            <Route path="/category-name/:categoryname" element={<GetCategoryByName/>} />
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
