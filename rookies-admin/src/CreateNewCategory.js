import { createNewCategory, getCategories } from "./service/categoryService"
import React, { useEffect, useState } from 'react';

const CreateNewCategory = (props) => {

    const [category, setCategory] = useState({})

    useEffect(async () => {
        setCategory(await getCategories()) }, [])

    let count = 0;
    for(let key in category.data) {
        count ++;
    }

    const [onCreateCategoryClick, setOnCreateCategoryClick] = useState(false)
    function CreateCategory() {
        setOnCreateCategoryClick(true)

        const categoryName = document.getElementById("category-name");
        const displayOrder = count + 1;
        const createdDate = new Date();

        setCategory({
            "categoryId": 0,
            "categoryName": categoryName.value,
            "displayOrder": displayOrder,
            "createdDate": createdDate
        })
    }

    useEffect(async () => {
        if (onCreateCategoryClick) {
            await createNewCategory(category)
            setOnCreateCategoryClick(false)
        }
    }, [onCreateCategoryClick])

    return (
        <div>
            <h2>Create new category here</h2>
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
            <button onClick={() => CreateCategory()}>Submit</button>
        </div>
    );
};

export default CreateNewCategory;