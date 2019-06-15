import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../Header';
import Slider from '../Slider';
import Facility from '../Facility';
import Caraousel from '../Caraousel';
import Footer from '../Footer';

class Home extends Component {
   
    render() {
        return (
		
            <div>  
            <section className="banner-area">
<div className="container">
    <div className="row fullscreen align-items-center justify-content-start">
        <div className="col-lg-12">
            <div className="active-banner-slider owl-carousel">
                
                <div className="row single-slide align-items-center d-flex">
                    <div className="col-lg-5 col-md-6">
                        <div className="banner-content">
                            <h1>Sachin New <br />Collection!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <div className="add-bag d-flex align-items-center">
                                <a className="add-btn" href=""><span className="lnr lnr-cross" /></a>
                                <span className="add-text text-uppercase">Add to Bag</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="banner-img">
                            <img className="img-fluid" src={'./img/banner/banner-img.png'} alt="" />
                        </div>
                    </div>
                </div>
            
                <div className="row single-slide">
                    <div className="col-lg-5">
                        <div className="banner-content">
                            <h1>Nike New <br />Collection!</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                            <div className="add-bag d-flex align-items-center">
                                <a className="add-btn" href=""><span className="lnr lnr-cross" /></a>
                                <span className="add-text text-uppercase">Add to Bag</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="banner-img">
                            <img className="img-fluid" src="img/banner/banner-img.png" alt="" />
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
                    <img src="img/features/f-icon1.png" alt="" />
                </div>
                <h6>Free Delivery</h6>
                <p>Free Shipping on all order</p>
            </div>
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
                <div className="f-icon">
                    <img src="img/features/f-icon2.png" alt="" />
                </div>
                <h6>Return Policy</h6>
                <p>Free Shipping on all order</p>
            </div>
        </div>
        
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
                <div className="f-icon">
                    <img src="img/features/f-icon3.png" alt="" />
                </div>
                <h6>24/7 Support</h6>
                <p>Free Shipping on all order</p>
            </div>
        </div>
    
        <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="single-features">
                <div className="f-icon">
                    <img src="img/features/f-icon4.png" alt="" />
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
							<img className="img-fluid" src="img/product/p1.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
				
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p2.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p3.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">
									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
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
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p5.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p6.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p7.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p8.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
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
							<img className="img-fluid" src="img/product/p6.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p8.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p3.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p5.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p1.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
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
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p1.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
										<p className="hover-text">view more</p>
									</a>
								</div>
							</div>
						</div>
					</div>
					
					<div className="col-lg-3 col-md-6">
						<div className="single-product">
							<img className="img-fluid" src="img/product/p8.jpg" alt="" />
							<div className="product-details">
								<h6>addidas New Hammer sole
									for Sports person</h6>
								<div className="price">
									<h6>$150.00</h6>
									<h6 className="l-through">$210.00</h6>
								</div>
								<div className="prd-bottom">

									<a href="" className="social-info">
										<span className="ti-bag" />
										<p className="hover-text">add to bag</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-heart" />
										<p className="hover-text">Wishlist</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-sync" />
										<p className="hover-text">compare</p>
									</a>
									<a href="" className="social-info">
										<span className="lnr lnr-move" />
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
             <footer className="footer-area section_gap">
		<div className="container">
			<div className="row">
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>About Us</h6>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore
							magna aliqua.
						</p>
					</div>
				</div>
				<div className="col-lg-4  col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Newsletter</h6>
						<p>Stay update with our latest</p>
						<div className="" id="mc_embed_signup">

							<form
target="_blank" noValidate="true" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
							 method="get" className="form-inline"
							>

								<div className="d-flex flex-row">

									<input
className="form-control" name="EMAIL" placeholder="Enter Email" 
									 required="" type="email"
									/>


									<button className="click-btn btn btn-default"><i className="fa fa-long-arrow-right" aria-hidden="true" /></button>
			
								</div>
								<div className="info" />
							</form>
						</div>
					</div>
				</div>
				<div className="col-lg-3  col-md-6 col-sm-6">
					<div className="single-footer-widget mail-chimp">
						<h6 className="mb-20">Instragram Feed</h6>
						<ul className="instafeed d-flex flex-wrap">
							<li><img src="img/i1.jpg" alt="" /></li>
							<li><img src="img/i2.jpg" alt="" /></li>
							<li><img src="img/i3.jpg" alt="" /></li>
							<li><img src="img/i4.jpg" alt="" /></li>
							<li><img src="img/i5.jpg" alt="" /></li>
							<li><img src="img/i6.jpg" alt="" /></li>
							<li><img src="img/i7.jpg" alt="" /></li>
							<li><img src="img/i8.jpg" alt="" /></li>
						</ul>
					</div>
				</div>
				<div className="col-lg-2 col-md-6 col-sm-6">
					<div className="single-footer-widget">
						<h6>Follow Us</h6>
						<p>Let us be social</p>
						<div className="footer-social d-flex align-items-center">
							<a href="#"><i className="fa fa-facebook" /></a>
							<a href="#"><i className="fa fa-twitter" /></a>
							<a href="#"><i className="fa fa-dribbble" /></a>
							<a href="#"><i className="fa fa-behance" /></a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-bottom d-flex justify-content-center align-items-center flex-wrap">
				<p className="footer-text m-0">All rights reserved </p>
			</div>
		</div>
	</footer>
    </div> 
   );
}

}

const mapStateToProps = state => {
    return { libraries: state.libraries };
    };

    
export default connect(mapStateToProps)(Home);
