import { deleteBook } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const DeleteBook = (props) => {

    const {bookid} = useParams()

    const [onDeleteBookClick, setOnDeleteBookClick] = useState(false)

    function DeleteBook() {
        setOnDeleteBookClick(true)
    }

    useEffect(async () => {
        if (onDeleteBookClick) {
            await deleteBook(bookid)
            setOnDeleteBookClick(false)
            window.location.href = "/";
        }
    }, [onDeleteBookClick])

    return (
        <div>
            <h2>Are you sure to delete this book?</h2>
            <br></br>
            <button onClick={() => DeleteBook()}>Delete</button>
        </div>
    );
};

export default DeleteBook;