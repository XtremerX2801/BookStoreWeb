import axios from "axios";

export async function getCategories() { 
    const endpoint = "https://localhost:7115/api/Categories";
    var response = await axios.get(endpoint);
    return response
}

export async function getCategoryById(id) { 
    const endpoint = "https://localhost:7115/api/Categories/id/" + id;
    var response = await axios.get(endpoint);
    return response
}

export async function getCategoryByName(categoryName) { 
    const endpoint = "https://localhost:7115/api/Categories/search/" + categoryName;
    var response = await axios.get(endpoint);
    return response
}

export async function createNewCategory(category) { 
    console.log(category);
    const endpoint = "https://localhost:7115/api/Categories";
    var response = await axios.post(endpoint, category);
    return response
}

export async function updateCategory(category, categoryid) { 
    const endpoint = "https://localhost:7115/api/Categories/" + categoryid;
    var response = await axios.put(endpoint, category);
    return response
}

export async function deleteCategory(categoryid) { 
    const endpoint = "https://localhost:7115/api/Categories/" + categoryid;
    var response = await axios.delete(endpoint);
    return response
}