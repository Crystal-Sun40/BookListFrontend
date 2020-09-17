import {FieldInputProps} from "formik";
import React, {FC} from "react";
import TextField from "@material-ui/core/TextField/TextField";

interface Props {
    field: FieldInputProps<string | number>;
    label: string;
}

export const FormikInput: FC<Props> = ({field, ...props}) => {
    return (
        <TextField
            {...field}
            {...props}
            fullWidth={true}
            variant="outlined"
        />
    );
};
