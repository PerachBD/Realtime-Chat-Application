import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
let socket;

const Chat = ({ location }) => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const [users, setUsers] = useState([]);
    const ENDPOINT = `http://localhost:5000`;
    console.log(ENDPOINT);

    useEffect( () => {
        const { name, room } = queryString.parse(location.search);

        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);
        socket.emit('join', { name, room }, () => {
        });

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);
        })
        socket.on('roomData', (roomData) => {
            // setUsers(...users);
            setUsers(roomData.users.map(element => element.name));
            console.log(users)
        })
    }, [messages]);

    useEffect(()=>{
        
    },[users])

    const sendMessage = (event) => {
        event.preventDefault();
        if(message){
            socket.emit('sendMessage', message, () => setMessage(''));
        }
    }

    console.log(message, messages);
    const userlist = users.map((item)=>(<p>{item},</p>));
    console.log(userlist)
    return (
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room} users={users} />
                {/* <div>connected: {userlist}</div> */}
                <Messages messages={messages} name={name}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
            </div>
            
            {/* <TextContainer users={users}/> */}
        </div>
    )
}

export default Chat;