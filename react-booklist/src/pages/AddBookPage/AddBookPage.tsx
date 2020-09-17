import React, {FC} from "react";
import {BookDetailsType} from "../../type/BookDetailsType";
import {DetailForm} from "../../components/DetailForm/DetailForm";
import {addBook} from "../../services/bookListService";
import {Box} from "@material-ui/core";

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
        <Box>
            <DetailForm handleSubmit={handleSubmit} initialValues={initialValues}/>
        </Box>
    )
};
