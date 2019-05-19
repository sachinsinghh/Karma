import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import LOGO from './img/logo.png';

export default class App extends Component {
    render() {
        return (
            <div className="App">       
	 			<Header />
				 <section className="banner-area">
		<div className="container">
			<div className="row fullscreen align-items-center justify-content-start">
				<div className="col-lg-12">
					<div className="active-banner-slider owl-carousel">
						
						<div className="row single-slide align-items-center d-flex">
							<div className="col-lg-5 col-md-6">
								<div className="banner-content">
									<h1>Nike New <br/><br/>Collection!</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
									<div className="add-bag d-flex align-items-center">
										<a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
										<span className="add-text text-uppercase">Add to Bag</span>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="banner-img">
									<img className="img-fluid" src={"./img/banner/banner-img.png"} alt=""/>
								</div>
							</div>
						</div>
					
						<div className="row single-slide">
							<div className="col-lg-5">
								<div className="banner-content">
									<h1>Nike New <br/>Collection!</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
										dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
									<div className="add-bag d-flex align-items-center">
										<a className="add-btn" href=""><span className="lnr lnr-cross"></span></a>
										<span className="add-text text-uppercase">Add to Bag</span>
									</div>
								</div>
							</div>
							<div className="col-lg-7">
								<div className="banner-img">
									<img className="img-fluid" src="img/banner/banner-img.png" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	
	<section className="features-area section_gap">
		<div className="container">
			<div className="row features-inner">
		
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src="img/features/f-icon1.png" alt=""/>
						</div>
						<h6>Free Delivery</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src="img/features/f-icon2.png" alt=""/>
						</div>
						<h6>Return Policy</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
				
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src="img/features/f-icon3.png" alt=""/>
						</div>
						<h6>24/7 Support</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
			
				<div className="col-lg-3 col-md-6 col-sm-6">
					<div className="single-features">
						<div className="f-icon">
							<img src="img/features/f-icon4.png" alt=""/>
						</div>
						<h6>Secure Payment</h6>
						<p>Free Shipping on all order</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section className="owl-carousel active-product-area section_gap">
		
		<div className="single-product-slider">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 text-center">
						<div className="section-title">
							<h1>Latest Products</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua.</p>
						</div>
					</div>
				</div>
				<div className="row">
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p1.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p2.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p3.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">
									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p4.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p5.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p6.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p7.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p8.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<div className="single-product-slider">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-6 text-center">
						<div className="section-title">
							<h1>Coming Products</h1>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
								dolore
								magna aliqua.</p>
						</div>
					</div>
				</div>
				<div className="row">
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p6.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p8.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p3.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p5.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p1.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p4.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p1.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p8.jpg" alt=""/>
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag"></span>
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart"></span>
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync"></span>
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move"></span>
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>


	
            </div>
        );
    }
}

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
