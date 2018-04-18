import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Stack from './components/Stack';
import { setStack } from './actions';
import StackForm from './components/StackForm';
import './index.css';

const store = createStore(rootReducer);
store.subscribe(() => console.log("store", store.getState()));
store.dispatch(setStack({ id: 0, title: 'example', cards: [] }));
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/stack' exact component={Stack} />
                <Route path='/stack_form' exact component={StackForm} />
            </Switch>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));