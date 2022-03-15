import { getCategories } from "./service/categoryService"
import React, { useEffect, useState } from 'react';
import Link from "react-router-dom";

const GetCategories = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getCategories()) }, [])

    return (

        <div>
            <table>
                <thead>
                <tr>
                    <td>Category Name</td>
                    <td>Display Order</td>
                    <td>Created Date</td>
                </tr>
                </thead>
                <tbody>
                    {data ? data.data.map(_ => (
                    <tr key={_.categoryId}>
                        <td>{_.categoryName}</td>
                        <td>{_.displayOrder}</td>
                        <td>{_.createdDate}</td>
                        <td><button>Edit</button></td>
                    </tr>
                    )) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetCategories;