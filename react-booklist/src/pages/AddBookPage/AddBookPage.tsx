import React, {FC} from "react";
import {BookDetailsType} from "../../type/BookDetailsType";
import {DetailForm} from "../../components/DetailForm/DetailForm";
import {addBook} from "../../services/bookListServices";

export const AddBookPage: FC = () => {
    const initialValues = {
        bookId: 0,
        bookTitle: "",
        bookAuthor: "",
        bookImage: "",
    };

    const handleSubmit = (book: BookDetailsType) => {
        addBook(book).then(() => {
            window.location.href = "/"
        });
    };
    return (
        <>
            <DetailForm handleSubmit={handleSubmit} initialValues={initialValues}/>
        </>
    )
};
