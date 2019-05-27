/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from './components/Header';
import Slider from './components/Slider';
import Facility from './components/Facility';
import Caraousel from './components/Caraousel';
import Footer from './components/Footer';
import reducers from './reducers';

export default class App extends Component {
    render() {
        return (
			<Provider store={createStore(reducers)}>
            <div className="App">       
	 			<Header />
				 <Slider />
			
				 <Facility />
				 <Caraousel />
				 <Footer />
            </div>
			</Provider>
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
