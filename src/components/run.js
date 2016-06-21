import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import {behavior} from '../redux/reducer';
import App from './Main';
//import NotificationPanel from './NotificationPanel';

const store = createStore(behavior);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
//ReactDOM.render(<NotificationPanel message={'test'} alertType={'danger'}/>, document.getElementById('app'));
