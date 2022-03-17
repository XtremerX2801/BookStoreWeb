import { getCategoryById } from "./service/categoryService"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const GetCategoryById = (props) => {

    const {categoryid} = useParams()

    const [data, setData] = useState(null)
        useEffect(async () => {
    setData(await getCategoryById(categoryid)) }, [])

    return (
        <div>
            <h2>Id: {categoryid}</h2>
            <br></br>
            <table>
                <thead>
                <tr>
                    <td>Category Name</td>
                    <td>Created Date</td>
                </tr>
                </thead>
                <tbody>
                    {data ? 
                    <tr key={data.data.categoryId}>
                        <td>{data.data.categoryName}</td>
                        <td>{data.data.createdDate}</td>
                        <td><button>Edit</button></td>
                    </tr>
                     : (<></>)}
                </tbody>
            </table>
        </div>
    );
};
  
export default GetCategoryById;