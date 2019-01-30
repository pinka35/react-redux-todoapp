import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux"
import {createStore} from "redux"
import App from './App';
import reducers from "./reducers/"

let store=createStore(reducers);
ReactDOM.render(<Provider store={store}>
<App />
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

