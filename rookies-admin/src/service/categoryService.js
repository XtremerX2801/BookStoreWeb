import axios from "axios";

export async function getCategorys() { 
    const endpoint = "https://localhost:7115/api/Categories";
    var response = await axios.get(endpoint);
    return response
}