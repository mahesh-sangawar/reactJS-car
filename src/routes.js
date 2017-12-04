import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';


export default (
    <Router history={browserHistory} path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="search" component={SearchPage} />
    </Router>
);