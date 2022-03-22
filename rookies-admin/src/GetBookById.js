import { getBookById } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";


const GetBookById = (props) => {

    const {bookid} = useParams()

    const [data, setData] = useState(null)
    useEffect(async () => {
    setData(await getBookById(bookid)) }, [])

    function EditBook(bookId) {
        window.location.href = "/product-update/" + String(bookId);
    }

    function DeleteBook(bookId) {
        window.location.href = "/product-delete/" + String(bookId);
    }

    return (
        <div>
            <h2>Id: {bookid}</h2>
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
                    {data ? 
                    <tr key={data.data.bookId}>
                        <td>{data.data.bookName}</td>
                        <td>{data.data.author}</td>
                        <td>{data.data.bookPrice}$</td>
                        <td><button onClick={() => EditBook(data.data.bookId)}>Edit</button></td>
                        <td><button onClick={() => DeleteBook(data.data.bookId)}>Delete</button></td>
                    </tr>
                     : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBookById;