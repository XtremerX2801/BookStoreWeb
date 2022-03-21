import axios from "axios";
import Constants from "./Constants";

export async function getBooks() { 
    const endpoint = Constants.bookUrl;
    var response = await axios.get(endpoint);
    return response
}

export async function getBookById(id) { 
    const endpoint = Constants.bookUrl + "/id/" + id;
    var response = await axios.get(endpoint);
    return response
}

export async function getBookByName(bookName) { 
    const endpoint = Constants.bookUrl + "/search/" + bookName;
    var response = await axios.get(endpoint);
    return response
}

export async function getBookByCategory(categoryName) { 
    const endpoint = Constants.bookUrl + "/category/" + categoryName;
    var response = await axios.get(endpoint);
    return response
}

export async function createNewBook(book) { 
    const endpoint = Constants.bookUrl;
    var response = await axios.post(endpoint, book);
    return response
}

export async function updateBook(book, bookid) { 
    const endpoint = Constants.bookUrl + "/" + bookid;
    var response = await axios.put(endpoint, book);
    return response
}

export async function deleteBook(bookid) { 
    const endpoint = Constants.bookUrl + "/" + bookid;
    var response = await axios.delete(endpoint);
    return response
}