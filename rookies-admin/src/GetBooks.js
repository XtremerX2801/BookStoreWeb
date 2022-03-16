import { getBooks } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const GetBooks = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getBooks()) }, [])

    var productId = document.getElementById("product-search-id");
    var productName = document.getElementById("product-search-name");
    var productCategory = document.getElementById("product-search-category");

    const enterID = () => {
        window.location.href = "/product-id/" + String(productId.value);
    }

    const enterName = () => {
        window.location.href = "/product-name/" + String(productName.value);
    }

    const enterCategory = () => {
        window.location.href = "/product-category/" + String(productCategory.value);
    }

    return (

        <div>

            <div className="search-wrapper">
                <input type="search" id="product-search-id" placeholder="Enter Book ID"></input>
                <button onClick={() => enterID()}>Submit</button>
                <br></br>

                <input type="search" id="product-search-name" placeholder="Enter Book Name"></input>
                <button onClick={() => enterName()}>Submit</button>
                <br></br>

                <input type="search" id="product-search-category" placeholder="Enter Book Category"></input>
                <button onClick={() => enterCategory()}>Submit</button>
            </div>

            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Author</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                    {data ? data.data.map(_ => 
                        (
                            <tr key={_.bookId}>
                                <td>{_.bookName}</td>
                                <td>{_.author}</td>
                                <td>{_.bookPrice}$</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    ) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBooks;