
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import './App.css';
import GetBooks from './GetBooks';
import GetBookById from './GetBookById';
import GetCategories from './GetCategories';
import GetBooksByCategory from "./GetBooksByCategory";
import GetBooksByName from "./GetBooksByName";

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<GetBooks />} />
              <Route path="/product-id/1" element={<GetBookById />} />
              <Route path="/categories" element={<GetCategories />} />
              <Route path="/product-name" element={<GetBooksByName />} />
              <Route path="/product-category" element={<GetBooksByCategory />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;
