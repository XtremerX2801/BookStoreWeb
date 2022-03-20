import { updateCategory } from "./service/categoryService"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const UpdateCategory = (props) => {

    const [category, setCategory] = useState({})
    const {categoryid} = useParams()

    const [onUpdateCategoryClick, setOnUpdateCategoryClick] = useState(false)
    function UpdateCategory() {
        setOnUpdateCategoryClick(true)

        const categoryName = document.getElementById("category-name");

        setCategory({
            "categoryId": categoryid,
            "categoryName": categoryName.value,
            "displayOrder": categoryid
        })
    }

    useEffect(async () => {
        if (onUpdateCategoryClick) {
            console.log(category);
            await updateCategory(category, categoryid)
            setOnUpdateCategoryClick(false)
            window.location.href = "/";
        }
    }, [onUpdateCategoryClick])

    return (
        <div>
            <h2>Update new category here</h2>
            <br></br>
            <table>
                <thead>
                    <tr>
                    <td>
                        Category Name
                        <div className="create-wrapper">
                            <input type="search" id="category-name" placeholder="Enter Book Name"></input>
                        </div>
                        </td>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
            <button onClick={() => UpdateCategory()}>Submit</button>
        </div>
    );
};

export default UpdateCategory;