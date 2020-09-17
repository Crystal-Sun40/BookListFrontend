import React, {FC, useEffect, useState} from "react"
import BookCard from "../../components/BookCardComponents/BookCard"
import {Grid} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {VoiceInput} from "../../components/VoiceInput/VoiceInput";
import {getBookList} from "../../services/bookListServices";
import {BookDetailsType} from "../../type/BookDetailsType";


export const BookListPage: FC = () => {
    const [bookList, setBookList] = useState<BookDetailsType[]>([]);
    useEffect( () => {
        getBookList().then(result =>{
            setBookList(result);
        });
    },[]);

    const handleAddBook = () => {
        window.location.href = '/add/';
    };
    const handleVoice = (value: string) => {

    };

    return (
        <>
            <VoiceInput handleVoice={handleVoice}/>
            <Grid container spacing={2}>
                {bookList.map((book, index) =>
                    <Grid item xs={2} key={index}>
                        <BookCard {...book} />
                    </Grid>)}
            </Grid>
            <IconButton color="primary" onClick={handleAddBook}>
                + Add book
            </IconButton>
        </>
    )
};
