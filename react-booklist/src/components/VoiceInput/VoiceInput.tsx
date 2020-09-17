import React, {FC, useState} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from "@material-ui/core";

interface Props {
    handleVoice:(value:string)=>void
}
export const VoiceInput:FC<Props> = ({handleVoice})=>{
    const { transcript } = useSpeechRecognition();
    const handleVoiceStart = () =>{
        SpeechRecognition.startListening();
    };
    const handleVoiceEnd = () =>{
        handleVoice(transcript);
        SpeechRecognition.stopListening();
    };
    if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
        return null
    }

    return (
        <div>
            <IconButton color="primary" aria-label="" onMouseDown={handleVoiceStart} onMouseUp={handleVoiceEnd}>
                <MicIcon />
            </IconButton>
            <p>{transcript}</p>
        </div>
    )
}