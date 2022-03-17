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