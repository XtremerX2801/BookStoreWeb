import { getBookByName } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

const GetBooksByName = (props) => {
    const {bookname} = useParams()

    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getBookByName(bookname)) }, [])

    return (

        <div>
            <h2>Name: {bookname}</h2>
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
  
export default GetBooksByName;