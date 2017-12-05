import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './components/app';
import HomePage from './components/home/HomePage';
import SearchPage from './components/search/SearchPage';
import NotFoundPage from './components/common/NotFoundPage';
import CarDetailsPage from './components/carDetails/CarDetailsPage';

export default (
    <Router history={browserHistory} path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="search" component={SearchPage} />
        <Route path="/:make/:model/:id" component={CarDetailsPage} />
        <Route path="/:make/:model" component={CarDetailsPage} />
        <Route path="*" component={NotFoundPage} />
    </Router>
);