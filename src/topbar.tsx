import React from 'react';
import Logo from './download.jpg'
import "./App.css";
import { Button } from './Button';
//Button will eventually into something more in a project: API, Signup, or Image 
// Button would normally be in MUI.
export const Topbar: React.FC = () => {
    return (
        <div className="topbar">
            <h1>Christmas Template</h1>
            <div><img src={Logo} className="logo" alt='' /></div>
            <div className='mc'>
                <Button
                    border="none"
                    height='20px'
                    onClick={() => document.write("Merry Christmas!")}
                    width="25px"
                    children="Christmas Gram"
                    />
            </div> 
        </div>
    )
}