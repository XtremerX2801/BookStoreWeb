import { getCategoryByName } from "./service/categoryService"
import React, { useEffect, useState } from 'react';
import {useParams} from "react-router-dom";

const GetCategoryByName = (props) => {
    const {categoryname} = useParams()

    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getCategoryByName(categoryname)) }, [])

    return (

        <div>
            <h2>Name: {categoryname}</h2>
            <br></br>
            <table>
                <thead>
                <tr>
                    <td>Category Name</td>
                    <td>Created Date</td>
                </tr>
                </thead>
                <tbody>
                    {data ? data.data.map(category => {
                        return (
                            <tr key={category.categoryId}>
                                <td>{category.categoryName}</td>
                                <td>{category.createdDate}</td>
                                <td><button>Edit</button></td>
                            </tr>
                        )
                    }) : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetCategoryByName;