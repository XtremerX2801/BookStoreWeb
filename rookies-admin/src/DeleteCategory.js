import { deleteCategory } from "./service/categoryService"
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

const DeleteCategory = (props) => {

    const {categoryid} = useParams()

    const [onDeleteCategoryClick, setOnDeleteCategoryClick] = useState(false)

    function DeleteCategory() {
        setOnDeleteCategoryClick(true)
    }

    useEffect(async () => {
        if (onDeleteCategoryClick) {
            await deleteCategory(categoryid)
            setOnDeleteCategoryClick(false)
            window.location.href = "/";
        }
    }, [onDeleteCategoryClick])

    return (
        <div>
            <h2>Are you sure to delete this category?</h2>
            <br></br>
            <button onClick={() => DeleteCategory()}>Delete</button>
        </div>
    );
};

export default DeleteCategory;