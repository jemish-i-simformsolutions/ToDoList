import React from 'react';
import ReactDOM from 'react-dom';
import MainComponent from './TodoList/MainComponent';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/ConfigureStore';
const store=ConfigureStore();
ReactDOM.render(
<Provider store={store}>
<MainComponent/>
</Provider>,
document.getElementById('div1'));


