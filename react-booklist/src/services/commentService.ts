import {CommentType} from "../type/CommentType";

const axios = require('axios');

const url = "https://booklistbackend.azurewebsites.net/bookComments";

export async function addComment(comment:CommentType) {
    await axios({
        method: 'post',
        url: `${url}/${comment.bookId}`,
        data: {
            ...comment
        }
    });
}