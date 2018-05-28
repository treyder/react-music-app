import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './css/index.css';
import App from './App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';

const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, 
document.getElementById('root'));
registerServiceWorker();
