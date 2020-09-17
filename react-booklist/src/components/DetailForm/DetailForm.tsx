import React, {FC} from "react";
import {Field, Form, Formik} from "formik";
import {BookDetailsType} from "../../type/BookDetailsType";
import {Button} from "@material-ui/core";
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
                <Field name="bookTitle" component={FormikInput} label="title"/>
                <Field name="bookAuthor" label="author" component={FormikInput}/>
                <Field name="bookImage" label="bookImage" component={FormikInput}/>
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
            </Form>
        </Formik>
    )
};
