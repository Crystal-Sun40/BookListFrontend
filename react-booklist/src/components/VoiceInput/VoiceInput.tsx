import React, {FC} from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import MicIcon from '@material-ui/icons/Mic';
import {IconButton} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

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
        <Box display="flex">
            <Box paddingRight={3}>
                <Typography variant="h5">search book by voice:</Typography>
                <Typography variant="body1">{transcript}</Typography>
            </Box>
            <IconButton color="primary" aria-label="" onMouseDown={handleVoiceStart} onMouseUp={handleVoiceEnd}>
                <MicIcon />
            </IconButton>
        </Box>
    )
}