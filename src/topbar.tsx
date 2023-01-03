import React from 'react';
import Logo from './download.jpg'
import "./App.css";
//Button will eventually into something more in a project: API, Signup, or Image 
// Button would normally be in MUI.
export const Topbar: React.FC = () => {
    return (
        <div className="topbar">
            <h1 className='intro'>Christmas Template</h1>
            <div className='logo'><img src={Logo} className="logo" alt='' /></div>
            
        </div>
    )
}