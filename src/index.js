import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import thunk from 'redux-thunk';
import './css/index.css';
import App from './App';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import { loadState, saveState } from './localStorage';
import ErrorBoundary from './ErrorBoundary';
import SearchMain from './SearchMain';
import SearchResult from './SearchResult';
import Film from './Film';
import PageNotFound from './PageNotFound';

//disabling persisted state for Homework 6
//const persistedState = loadState();
//const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    saveState(store.getState());
})

ReactDOM.render(
<Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={SearchMain} />
                    <Route exact path="/search/Search Query" component={SearchResult} />
                    <Route path="/film/:id" component={Film} />
                    <Route path="*" component={PageNotFound} />
                </Switch>
            </App>
        </Router>    
</Provider>
, 
document.getElementById('root'));
registerServiceWorker();
