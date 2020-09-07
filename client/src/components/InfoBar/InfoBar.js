import React from 'react';
import './InfoBar.css';

import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';

const InfoBar = ({ room, users }) => (
    <div>
        <div className="infoBar">
            <div className="leftInnerContainer">
                <img className="onlineIcon" src={onlineIcon} alt="online" />
                <h3>{room}</h3>
            </div>
            
            <div className="RightInnerContainer">
                <a href="/"><img src={closeIcon} alt="close" /></a>
            </div>
            
        </div>
        <div>
            connected:{users.map((item,index)=>(<p style={{display:"inline"}} key={index}> {item}, </p>))}
        </div>
    </div>
)
export default InfoBar;