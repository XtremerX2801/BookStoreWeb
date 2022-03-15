import axios from "axios";

export async function getCategories() { 
    const endpoint = "https://localhost:7115/api/Categories";
    var response = await axios.get(endpoint);
    return response
}