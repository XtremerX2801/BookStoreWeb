import axios from "axios";
import Constants from "./Constants";

export async function getCategories() { 
    const endpoint = Constants.categoryUrl;
    var response = await axios.get(endpoint);
    return response
}

export async function getCategoryById(id) { 
    const endpoint = Constants.categoryUrl + "/id/" + id;
    var response = await axios.get(endpoint);
    return response
}

export async function getCategoryByName(categoryName) { 
    const endpoint = Constants.categoryUrl + "/search/" + categoryName;
    var response = await axios.get(endpoint);
    return response
}

export async function createNewCategory(category) { 
    console.log(category);
    const endpoint = Constants.categoryUrl;
    var response = await axios.post(endpoint, category);
    return response
}

export async function updateCategory(category, categoryid) { 
    const endpoint = Constants.categoryUrl + "/" + categoryid;
    var response = await axios.put(endpoint, category);
    return response
}

export async function deleteCategory(categoryid) { 
    const endpoint = Constants.categoryUrl + "/" + categoryid;
    var response = await axios.delete(endpoint);
    return response
}