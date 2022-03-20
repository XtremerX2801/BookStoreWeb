import { updateBook, deleteBook } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const UpdateBook = (props) => {

    const [book, setBook] = useState({})
    const {bookid} = useParams()

    const [onUpdateBookClick, setOnUpdateBookClick] = useState(false)
    function UpdateBook() {
        setOnUpdateBookClick(true)

        var productName = document.getElementById("product-name");
        var productAuthor = document.getElementById("product-author");
        var productCategory = document.getElementById("product-category");
        var productPrice = document.getElementById("product-price");

        setBook({
            "bookId": bookid,
            "bookName": productName.value,
            "author": productAuthor.value,
            "bookCategory": productCategory.value,
            "bookPrice": productPrice.value,
            "bookImg": null
        })
    }

    useEffect(async () => {
        if (onUpdateBookClick) {
            await updateBook(book, bookid)
            setOnUpdateBookClick(false)
            window.location.href = "/";
        }
    }, [onUpdateBookClick])

    return (
        <div>
            <h2>Update new book here</h2>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <td>
                            Product Name
                            <div className="update-wrapper">
                                <input type="search" id="product-name" placeholder="Enter Book Name"></input>
                            </div>
                        </td>
                        <td>
                            Author
                            <div className="update-wrapper">
                                <input type="search" id="product-author" placeholder="Enter Author Name"></input>
                            </div>
                        </td>
                        <td>
                            Category
                            <div className="update-wrapper">
                                <input type="search" id="product-category" placeholder="Enter Book Category"></input>
                            </div>
                        </td>
                        <td>
                            Price
                            <div className="update-wrapper">
                                <input type="search" id="product-price" placeholder="Enter Book Price"></input>
                            </div>
                        </td>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
            <button onClick={() => UpdateBook()}>Submit</button>
        </div>
    );
};

export default UpdateBook;