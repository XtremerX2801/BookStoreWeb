import { getBooks } from "./service/bookService"
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const GetBooks = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getBooks()) }, [])

    const newTo = { 
        pathname: "/product-id/5"
      };

    const updateValue = () => {
        
    }

    return (

        <div>

            <div className="search-wrapper">
                <input type="search" id="search" placeholder="Enter Book ID"></input>
                <button onClick={() => updateValue()}><Link to={newTo}>Submit</Link></button>
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
                    {data ? data.data.map(_ => 
                        (
                            <tr key={_.bookId}>
                                <td>{_.bookName}</td>
                                <td>{_.author}</td>
                                <td>{_.bookPrice}$</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    ) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetBooks;