import { getBooks } from "./service/bookService"
import React, { useEffect, useState } from 'react';


const GetBooks = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getBooks()) }, [])

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
                    {data ? data.data.map(_ => (
                    <tr key={_.bookId}>
                        <td>{_.bookName}</td>
                        <td>{_.author}</td>
                        <td>{_.bookPrice}$</td>
                    </tr>
                    )) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBooks;