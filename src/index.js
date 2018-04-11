import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import roorReducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';
import { setStack } from './actions';

const store = createStore(roorReducer);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/stack' exact component={Stack} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));