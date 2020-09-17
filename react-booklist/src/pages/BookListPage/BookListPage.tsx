import React, {FC, useEffect, useState} from "react"
import BookCard from "../../components/BookCardComponents/BookCard"
import {Button, Grid} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import {VoiceInput} from "../../components/VoiceInput/VoiceInput";
import {getBookList} from "../../services/bookListService";
import {BookDetailsType} from "../../type/BookDetailsType";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";


export const BookListPage: FC = () => {
    const [bookList, setBookList] = useState<BookDetailsType[]>([]);
    useEffect(() => {
        getBookList().then(result => {
            setBookList(result);
        });
    }, []);

    const handleAddBook = () => {
        window.location.href = '/add/';
    };
    const handleVoice = (value: string) => {
        getBookList().then((result: BookDetailsType[]) => {
            setBookList(result.filter(book => (book.bookTitle.toLowerCase().includes(value.toLowerCase()))));
        });
    };
    const handleShare = () => {
        // @ts-ignore
        window.FB.ui({
            display: 'popup',
            method: 'share',
            href: 'https://booklistfrontend.azurewebsites.net/',
        }, function () {
        });
    };

    return (
        <Box marginTop={4}>
            <Typography variant={"h3"}>MSA BookList</Typography>
                <VoiceInput handleVoice={handleVoice}/>
            <Box display="flex" justifyContent="flex-end" paddingY={4}>
                <IconButton color="primary" onClick={handleAddBook}>
                    + Add book
                </IconButton>
                <Button variant="contained" color="primary" onClick={handleShare}>share with facebook</Button>
            </Box>
            <Grid container spacing={2}>
                {bookList.map((book, index) =>
                    <Grid item xs={12} md={3} key={index}>
                        <BookCard {...book} />
                    </Grid>)}
            </Grid>
        </Box>
    )
};
