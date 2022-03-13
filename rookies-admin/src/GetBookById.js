import { getBookById } from "./service/bookService"
import React, { useEffect, useState } from 'react';


const GetBookById = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getBookById(1)) }, [])

    return (
        <div>
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
                    </tr>
                     : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBookById;