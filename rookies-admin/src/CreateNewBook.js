import { createNewBook } from "./service/bookService"
import React, { useEffect, useState } from 'react';

const CreateNewBook = (props) => {

    var productName = document.getElementById("product-name");
    var productAuthor = document.getElementById("product-author");
    var productCategory = document.getElementById("product-category");
    var productPrice = document.getElementById("product-price");

    var book = null;

    function CreateBook() {
        book = {
            "bookId": 0,
            "bookName": String(productName),
            "author": String(productAuthor),
            "bookCategory": String(productCategory),
            "bookPrice": String(productPrice),
            "bookImg": null
        }
        const [data, setData] = useState(null)
        useEffect(async () => {
            setData(await createNewBook(book)) }, [])
    }

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
                {/* <tbody>
                    {data ? 
                    <tr key={data.data.bookId}>
                        <td>{data.data.bookName}</td>
                        <td>{data.data.author}</td>
                        <td>{data.data.bookPrice}$</td>
                        <td><button>Edit</button></td>
                    </tr>
                     : (<></>)}
                </tbody> */}
            </table>
            <button onClick={() => CreateBook()}>Submit</button>
        </div>
    );
};
  
export default CreateNewBook;