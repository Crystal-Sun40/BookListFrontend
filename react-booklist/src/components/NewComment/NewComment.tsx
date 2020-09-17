import React, {FC, useState} from "react";
import {Button, TextField} from "@material-ui/core";

interface Props {
    handleSave:(val:string)=>void;
}

export const NewComment: FC<Props> = ({handleSave}) => {
    const [val,setVal] = useState("");
   const handleOnChange = (e:any) =>{
        setVal(e.target.value)
    };
   const handleClick = ()=>{
       handleSave(val);
   };
    return(
        <>
            <TextField
                fullWidth
                label="Comment"
                multiline
                rows="4"
                margin="normal"
                variant="filled"
                onChange={handleOnChange}
            />
            <Button variant="contained" color="primary"onClick={handleClick}>add commit</Button>
        </>
    )
};