import axios from "axios";

export async function getBooks() { 
    const endpoint = "https://localhost:7115/api/Books";
    var response = await axios.get(endpoint);
    return response
}

export async function getBookById(id) { 
    const endpoint = "https://localhost:7115/api/Books/id/" + id;
    var response = await axios.get(endpoint);
    return response
}

export async function getBookByName(bookName) { 
    const endpoint = "https://localhost:7115/api/Books/search/" + bookName;
    var response = await axios.get(endpoint);
    return response
}

export async function getBookByCategory(categoryName) { 
    const endpoint = "https://localhost:7115/api/Books/category/" + categoryName;
    var response = await axios.get(endpoint);
    return response
}

export async function createNewBook(book) { 
    const endpoint = "https://localhost:7115/api/Books";
    var response = await axios.post(endpoint, book);
    return response
}

export async function updateBook(book) { 
    const endpoint = "https://localhost:7115/api/Books";
    var response = await axios.put(endpoint, book);
    return response
}