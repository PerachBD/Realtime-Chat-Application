import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import {chatContext} from '../../chat-context';

import './Join.css';

const Join = () => {
    const [chat, setChat] = useContext(chatContext);
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    const submit = (event) => {
        if(!name || !room){
            event.preventDefault()
        }else{
            setChat({name,room})
        }
    }

    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h1 className="heading">Join</h1>
                <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder="Room" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
                <button className="button mt-20" type="submit" onClick={(event) => submit(event)}>Sign In</button>
            </div>
        </div>
    )
}

export default Join;