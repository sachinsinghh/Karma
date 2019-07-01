/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Reduxthunk from 'redux-thunk';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import Home from './components/pages/Home';
import Dashboard from './components/admin/Dashboard';
import Login from './components/admin/Login';
import NotFound from './components/pages/NotFound';
import Header from './components/Header';

export default class App extends Component {
	

    render() {
		const store = createStore(reducers, {}, applyMiddleware(Reduxthunk));
        return (
			
			<Provider store={store}>
			<BrowserRouter>
			
			 <Switch>	
			 
			 <Route path="/Login" exact component={Login} />
			 <Route path="/admin" component={Dashboard} /> 
			 <Route path="/" component={Header} /> 
			 
			<Route component={NotFound} /> 
			</Switch>
			</BrowserRouter>
			</Provider>	
			
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
