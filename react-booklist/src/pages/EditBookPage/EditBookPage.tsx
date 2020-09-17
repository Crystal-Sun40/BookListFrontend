import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {DetailForm} from "../../components/DetailForm/DetailForm";
import {BookDetailsType} from "../../type/BookDetailsType";
import {Button} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteBook, getBook, updateBook} from "../../services/bookListServices";

export const EditBookPage: FC = () => {
    const {id} = useParams();
    const [book, setBook] = useState<BookDetailsType>({
        bookTitle: "",
        bookAuthor: "",
        bookImage: "",
    });
    useEffect(() => {
        getBook(id).then(result => {
            setBook({bookAuthor: result.bookAuthor, bookImage: result.bookImage, bookTitle: result.bookTitle});
        });
    }, [id]);

    const handleSubmit = (value: BookDetailsType) => {
        const requestBody = {...value, bookId:Number(id)};
        updateBook(requestBody).then(() => {
            window.location.href = "/"
        });

    };

    const handleDelete = () =>{
        deleteBook(Number(id)).then(() => {
            window.location.href = "/"
        });
    };
    return (
        <>
            <DetailForm handleSubmit={handleSubmit} initialValues={book}/>
            <Button
                variant="contained"
                color="secondary"
                href=""
                onClick={handleDelete}
                startIcon={<DeleteIcon/>}
            >
                Delete
            </Button>
        </>
    )
};
