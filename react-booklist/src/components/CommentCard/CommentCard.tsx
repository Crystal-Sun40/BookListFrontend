import React, {FC} from "react";
import {CommentType} from "../../type/CommentType";
import {Box} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";



export const CommentCard: FC<CommentType> = ({comments,user}) => (
    <Box minHeight="50px" boxShadow="0 8px 6px -6px black" paddingX={3} paddingY={2} borderRadius={2} border="2px solid #DCDCDC" marginY={3} display="flex">
        <Typography variant="body1" color="primary">{user}:    </Typography>
        <Box paddingX={1}/>
        <Typography variant="body1"> {comments}</Typography>
    </Box>
);