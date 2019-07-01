/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable max-len */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch } from 'react-router-dom';
import Footer from './Footer';
import FrontHome from './pages/FrontHome';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Login from './admin/Login';
import Dashboard from './admin/Dashboard';


class Header extends Component {

	componentDidMount()	{
		console.log(this.props);
	}
    render() {
        return (
				<div>
                <header className="header_area sticky-header">
		<div className="main_menu">
			<nav className="navbar navbar-expand-lg navbar-light main_box">
				<div className="container">
					<a className="navbar-brand logo_h" href="index.html"><img src={'./img/logo.png'} alt="" /></a>
					<button
className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					 aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
					>
						<span className="icon-bar" />
						<span className="icon-bar" />
						<span className="icon-bar" />
					</button>	
					<div className="collapse navbar-collapse offset" id="navbarSupportedContent">
						<ul className="nav navbar-nav menu_nav ml-auto">
							<li className="nav-item active"><Link className="nav-link" to="/">Home</Link></li>
							<li className="nav-item submenu dropdown">
								<a
href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false"
								>Shop</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><Link className="nav-link" to="/Test1">Shop Category</Link></li>
									<li className="nav-item"><a className="nav-link" href="single-product.html">Product Details</a></li>
									<li className="nav-item"><a className="nav-link" href="checkout.html">Product Checkout</a></li>
									<li className="nav-item"><a className="nav-link" href="cart.html">Shopping Cart</a></li>
									<li className="nav-item"><a className="nav-link" href="confirmation.html">Confirmation</a></li>
								</ul>
							</li>
							<li className="nav-item submenu dropdown">
							<Link className="nav-link" to="/blog">Blog</Link>
								
							</li>
						
							<li className="nav-item submenu dropdown">
								<a
href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
								 aria-expanded="false"
								>Pages</a>
								<ul className="dropdown-menu">
									<li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
									<li className="nav-item"><a className="nav-link" href="tracking.html">Tracking</a></li>
									<li className="nav-item"><a className="nav-link" href="elements.html">Elements</a></li>
								</ul>
							</li>
							<li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
						</ul>
						
					</div>
				</div>
			</nav>
		</div>
		
	</header>   
	<Switch>
			<Route path="/blog" component={Blog} />
			<Route path="/contact" component={Contact} />
			<Route path="/" component={FrontHome} /> 
			
			</Switch>
	 
	 </div>

        );
    }

}
export default Header;

