import React, {FC, useEffect, useState} from "react";
import {useParams} from "react-router";
import {DetailForm} from "../../components/DetailForm/DetailForm";
import {BookDetailsType} from "../../type/BookDetailsType";
import {Button} from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteBook, getBook, updateBook} from "../../services/bookListService";
import {NewComment} from "../../components/NewComment/NewComment";
import {CommentType} from "../../type/CommentType";
import Box from "@material-ui/core/Box";
import {CommentCard} from "../../components/CommentCard/CommentCard";
import Typography from "@material-ui/core/Typography";
import {addComment} from "../../services/commentService";



export const EditBookPage: FC = () => {
    const {id} = useParams();
    const sessionUser = window.sessionStorage.getItem("userName");
    const [book, setBook] = useState<BookDetailsType>({
        bookTitle: "",
        bookAuthor: "",
        bookImage: "",
    });
    const [comments, setComments] = useState<CommentType[]>([]);
    useEffect(() => {
        getBook(id).then(result => {
            setBook({bookAuthor: result.bookAuthor, bookImage: result.bookImage, bookTitle: result.bookTitle});
            setComments(result.comments);
        });
    }, [id]);

    const handleSubmit = (value: BookDetailsType) => {
        const requestBody = {...value, bookId: Number(id)};
        updateBook(requestBody).then(() => {
            window.location.href = "/";
        });

    };
    const handleSaveComment = (val: string) => {
        const currentUser = sessionUser === null ? "anonymous" : sessionUser
        const requestBody:CommentType = {comments:val, bookId: Number(id),user:currentUser};
        addComment(requestBody).then(() => {
             window.location.reload();
        });
    };
    const handleDelete = () => {
        deleteBook(Number(id)).then(() => {
            window.location.href = "/"
        });
    };
    return (
        <Box paddingY={3}>
            <Typography variant={"h3"}>Book information</Typography>
            <DetailForm handleSubmit={handleSubmit} initialValues={book}/>
            <Button
                variant="contained"
                color="secondary"
                href=""
                onClick={handleDelete}
                startIcon={<DeleteIcon/>}
            >
                Delete book
            </Button>
            <Typography color="error" variant="body1" >note: delete book will delete all the comments related to it </Typography>

            <Box marginTop={4}>
                <hr />
                <Typography variant={"h3"} >Comments</Typography>
                {comments.length > 0 && comments.map((c, index) => (
                    <CommentCard key={index} {...c}/>
                ))}
                <NewComment handleSave={handleSaveComment}/>
            </Box>
        </Box>
    )
};
