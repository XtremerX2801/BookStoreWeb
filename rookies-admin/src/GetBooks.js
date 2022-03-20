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

    function enterID () {
        window.location.href = "/product-id/" + String(productId.value);
    }

    function enterName () {
        window.location.href = "/product-name/" + String(productName.value);
    }

    function enterCategory()  {
        window.location.href = "/product-category/" + String(productCategory.value);
    }

    function EditBook(bookId) {
        window.location.href = "/product-update/" + String(bookId);
    }

    function DeleteBook(bookId) {
        window.location.href = "/product-delete/" + String(bookId);
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
                    {data ? data.data.map(book => 
                        (
                            <tr key={book.bookId}>
                                <td>{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.bookPrice}$</td>
                                <td><button onClick={() => EditBook(book.bookId)}>Edit</button></td>
                                <td><button onClick={() => DeleteBook(book.bookId)}>Delete</button></td>
                            </tr>
                        )
                    ) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBooks;