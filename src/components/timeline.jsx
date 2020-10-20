import React from 'react';
import Chirp from './chirp';

let Timeline = (props) => {
    return props.chirps.map(x => <Chirp oneChirp={x}/>)
}





export default Timeline;