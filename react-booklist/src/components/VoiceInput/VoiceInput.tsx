import React, {FC, useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from "@material-ui/core";

interface Props {
    handleVoice:(value:string)=>void
}
export const VoiceInput:FC<Props> = ({handleVoice})=>{
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
        handleVoice(transcript);
        setActive(false);
        SpeechRecognition.stopListening();

    };
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div>
            <input defaultValue={isActive?transcript:voiceValue} />
            <IconButton color="primary" aria-label="" onMouseDown={handleVoiceStart} onMouseUp={handleVoiceEnd}>
                <MicIcon />
            </IconButton>
        </div>
    )
}