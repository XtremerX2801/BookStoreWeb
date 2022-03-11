import axios from "axios";
export async function getBooks() { 
    const endpoint = "https://localhost:7115/api/Books";
    var response = await axios.get(endpoint);
    return response
}
