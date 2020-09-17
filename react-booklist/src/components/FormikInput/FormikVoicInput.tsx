import {FieldInputProps} from "formik";
import React, {FC, useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import {VoiceInput} from "../VoiceInput/VoiceInput";
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";
import MicIcon from "@material-ui/icons/Mic";
import {IconButton} from "@material-ui/core";

interface Props {
    field: FieldInputProps<string | number>;
    label: string;
}

export const FormikVoicInput: FC<Props> = ({field, ...props}) => {
    const [isActive, setActive] = useState(false);
    const [voiceValue, setVoiceValue] = useState("");
    const { transcript } = useSpeechRecognition({ transcribing:isActive });
    const handleVoiceStart = () =>{
        // need to clean the input value or onChange to change the value
        setVoiceValue("");
        setActive(true);
        SpeechRecognition.startListening();
    };
    const handleVoiceEnd = () =>{
        setVoiceValue(transcript);
        setActive(false);
        SpeechRecognition.stopListening();
    };

    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }


    field.value = "liak";

    return (
        <>
        <TextField
            {...field}
            {...props}
            variant="outlined"
        />
            <IconButton color="primary" aria-label="" onMouseDown={handleVoiceStart} onMouseUp={handleVoiceEnd}>
                <MicIcon />
            </IconButton>
            {isActive?transcript:voiceValue}
        </>
    );
};
