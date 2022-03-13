
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home";
import './App.css';
import GetBooks from './GetBooks';
import GetBookById from './GetBookById';

function App() {
    return (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<GetBooks />} />
              <Route path="/product-id" element={<GetBookById />} />
            </Routes>
          </Router>
        </div>
    );
}

export default App;
