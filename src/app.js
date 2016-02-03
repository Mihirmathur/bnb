import React from 'react';
import Router from 'react-router';
import App from './components/App';
import Header from './components/Header';

const {Route} = Router;

var routes = <Route handler={App}>
 
</Route>;

Router.run(routes, Router.HistoryLocation, Root => React.render(<Root />, document.getElementById('app')));
Router.run(routes, Router.HistoryLocation, Root => React.render(<Header />, document.getElementById('head')));
