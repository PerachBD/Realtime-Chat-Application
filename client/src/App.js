import React, { useState } from 'react';

import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import {chatContext} from './chat-context';

import { BrowserRouter as Router, Route } from 'react-router-dom';


const App = () => {
    const [chat, setChat] = useState(null);
    return(
        <chatContext.Provider value={[chat, setChat]}>
            {!chat?(<Join/>):(<Chat/>)}
        </chatContext.Provider>
    )
}

export default App;