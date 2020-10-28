import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";


const Message = (props) => {
    return <div>
        {props.id} {props.message}
    </div>
}

export default Message;
