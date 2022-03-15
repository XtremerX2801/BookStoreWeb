import { getBookByCategory } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import Link from "react-router-dom";

const GetBooksByCategory = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getBookByCategory("Education")) }, [])

    return (

        <div>
            <h2>Category: Education</h2>
            <br></br>
            <table>
                <thead>
                <tr>
                    <td>Name</td>
                    <td>Author</td>
                    <td>Price</td>
                </tr>
                </thead>
                <tbody>
                    {data ? data.data.map(book => {
                        console.log(book);
                        return (
                            <tr key={book.bookId}>
                                <td>{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.bookPrice}$</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    }) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBooksByCategory;