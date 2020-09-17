import {BookDetailsType} from "../type/BookDetailsType";

const axios = require('axios');

const url = "https://booklistbackend.azurewebsites.net/bookList";

export async function  getBookList() {
    const result = await axios.get(url);
    return result.data;
}

export async function  getBook(bookId:string) {
    const result = await axios.get(`${url}/${bookId}`);
    return result.data;
}

export async function updateBook(book:BookDetailsType) {
    await axios({
        method: 'put',
        url: `${url}/${book.bookId}`,
        data: {
            ...book
        }
    });
}

export async function deleteBook(id:number) {
    await axios({
        method: 'delete',
        url: `${url}/${id}`
    });
}

export async function addBook(book:BookDetailsType) {
    await axios({
        method: 'post',
        url: url,
        data: {
            ...book
        }
    });
}