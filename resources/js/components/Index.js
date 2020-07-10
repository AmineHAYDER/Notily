import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import {NotificationContainer} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

function Index() {
    return (
        <div>
            <NotificationContainer/> {/*Container where the notifications will be displayed */}
            <Home/>
        </div>
    );
}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Index/>, document.getElementById('app'));
}
