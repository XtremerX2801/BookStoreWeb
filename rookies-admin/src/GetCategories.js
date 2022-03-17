import { getCategories } from "./service/categoryService"
import React, { useEffect, useState } from 'react';
import Link from "react-router-dom";

const GetCategories = (props) => {
    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getCategories()) }, [])

    var categoryId = document.getElementById("category-search-id");
    var categoryName = document.getElementById("category-search-name");

    const enterID = () => {
        window.location.href = "/category-id/" + String(categoryId.value);
    }

    const enterName = () => {
        window.location.href = "/category-name/" + String(categoryName.value);
    }

    return (

        <div>

            <div className="search-wrapper">
                <input type="search" id="category-search-id" placeholder="Enter Category ID"></input>
                <button onClick={() => enterID()}>Submit</button>
                <br></br>

                <input type="search" id="category-search-name" placeholder="Enter Category Name"></input>
                <button onClick={() => enterName()}>Submit</button>
            
            </div>

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