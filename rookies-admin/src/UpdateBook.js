import { createNewBook } from "./service/bookService"
import React, { useEffect, useState } from 'react';

const UpdateBook = (props) => {

    const [book, setBook] = useState({})

    const [onCreateBookClick, setOnCreateBookClick] = useState(false)
    function CreateBook() {
        setOnCreateBookClick(true)

        var productName = document.getElementById("product-name");
        var productAuthor = document.getElementById("product-author");
        var productCategory = document.getElementById("product-category");
        var productPrice = document.getElementById("product-price");

        setBook({
            "bookId": 0,
            "bookName": productName.value,
            "author": productAuthor.value,
            "bookCategory": productCategory.value,
            "bookPrice": productPrice.value,
            "bookImg": null
        })
    }

    useEffect(async () => {
        if (onCreateBookClick) {
            await createNewBook(book)
            setOnCreateBookClick(false)
        }
    }, [onCreateBookClick])

    return (
        <div>
            <h2>Create new book here</h2>
            <br></br>
            <table>
                <thead>
                    <tr>
                        <td>
                            Product Name
                            <div className="create-wrapper">
                                <input type="search" id="product-name" placeholder="Enter Book Name"></input>
                            </div>
                        </td>
                        <td>
                            Author
                            <div className="create-wrapper">
                                <input type="search" id="product-author" placeholder="Enter Author Name"></input>
                            </div>
                        </td>
                        <td>
                            Category
                            <div className="create-wrapper">
                                <input type="search" id="product-category" placeholder="Enter Book Category"></input>
                            </div>
                        </td>
                        <td>
                            Price
                            <div className="create-wrapper">
                                <input type="search" id="product-price" placeholder="Enter Book Price"></input>
                            </div>
                        </td>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
            <button onClick={() => CreateBook()}>Submit</button>
        </div>
    );
};

export default UpdateBook;