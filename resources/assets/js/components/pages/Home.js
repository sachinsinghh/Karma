import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import Slider from '../Slider';
import Facility from '../Facility';
import Caraousel from '../Caraousel';
import Footer from '../Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
            <Slider />
             <Facility />
             <Caraousel />
             <Footer />
             </div>
   );
}

}
export default Home;
