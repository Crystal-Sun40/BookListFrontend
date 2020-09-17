import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import {BookDetailsType} from "../../type/BookDetailsType";
import {Box, Button} from "@material-ui/core";
import SaveIcon from '@material-ui/icons/Save';
import {FormikInput} from "../FormikInput/FormikInput";

interface Props {
    initialValues: BookDetailsType,
    handleSubmit: (values: BookDetailsType) => void

}

export const DetailForm: FC<Props> = ({initialValues, handleSubmit}) => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            enableReinitialize
        >
            <Form>
                <Box display={["block","flex"]}  marginY={3}>
                <Box paddingTop={2} marginRight={[0,0,2]}>
                <Field name="bookTitle" component={FormikInput} label="title"/>
                </Box>
                <Box paddingTop={2} marginRight={[0,0,2]}>
                <Field name="bookAuthor" label="author" component={FormikInput}/>
                </Box>
                <Box paddingTop={2} marginRight={[0,0,2]}>
                <Field name="bookImage" label="bookImage" component={FormikInput}/>
                </Box>
                <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    type="submit"
                    href=""
                    startIcon={<SaveIcon />}
                >
                    Save
                </Button>
                    </Box>
            </Form>
        </Formik>
    )
};
