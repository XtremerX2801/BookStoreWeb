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

    function EditCategory(id) {
        window.location.href = "/category-update/" + String(id);
    }

    function DeleteCategory(id) {
        window.location.href = "/category-delete/" + String(id);
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
                    {data ? data.data.map(category => (
                    <tr key={category.categoryId}>
                        <td>{category.categoryName}</td>
                        <td>{category.displayOrder}</td>
                        <td>{category.createdDate}</td>
                        <td><button onClick={() => EditCategory(category.categoryId)}>Edit</button></td>
                        <td><button onClick={() => DeleteCategory(category.categoryId)}>Delete</button></td>
                    </tr>
                    )) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetCategories;