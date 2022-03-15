
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import './App.css';
import GetBooks from './GetBooks';
import GetCategories from './GetCategories';
import GetBooksByCategory from "./GetBooksByCategory";
import GetBooksByName from "./GetBooksByName";
import React from "react";
import GetBookById from './GetBookById';

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
            <Route path="/categories" element={<GetCategories />} />
            <Route path="/product-name" element={<GetBooksByName />} />
            <Route path="/product-category" element={<GetBooksByCategory />} />
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
