import React from "react";
import './bookCard.css'
import { Card, CardActionArea, CardContent, CardMedia, Typography} from "@material-ui/core";
import {BookDetailsType} from "../../type/BookDetailsType";




function BookCard(props: BookDetailsType) {
    const handleDetail = ()=>{
        window.location.href = `/edit-detail/${props.bookId}`;
    };
    return (
            <Card className="BookCardContainer" onClick={handleDetail}>
                <CardActionArea>
                    <CardMedia
                        className="BookCardImage"
                        image={props.bookImage}
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="h2" >
                            {props.bookTitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className="BookCardDescription" >
                            {props.bookAuthor}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    )
}

export default BookCard
