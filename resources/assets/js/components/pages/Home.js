import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header';
import FrontHome from './FrontHome';
import Blog from './Blog';
import Contact from './Contact';
import NotFound from './NotFound';

class Home extends Component {
   
    render() {
        return (
		
			<div>  
			<Header />
			<Switch>
			<Route path="/blog" component={Blog} />
			<Route path="/contact" component={Contact} />
			<Route path="/" component={FrontHome} /> 
			
			</Switch>
			</div> 
   );
}

}

const mapStateToProps = state => {
    return { libraries: state.libraries };
    };

    
export default connect(mapStateToProps)(Home);
