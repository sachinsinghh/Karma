import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../../actions';

class Login extends Component {
    onEmailChange(text)
    {
        this.props.emailChanged(text);
    }

    onPasswordChange(text)
    {
        this.props.passwordChanged(text);
    }
  
    render() {
        return (
            <section className="login_box_area section_gap">
		<div className="container">
			<div className="row">


				<div className="col-lg-12">
					<div className="login_form_inner">
						<h3>Log in to enter</h3>
						<form className="row login_form" action="contact_process.php" method="post" id="contactForm" noValidate="novalidate">
							
                            <div className="col-md-12 form-group">
								<input type="text" onChange={this.onEmailChange.bind(this)} value={this.props.email} className="form-control" id="name" name="name" placeholder="Username" />
							</div>

							<div className="col-md-12 form-group">
								<input type="text" onChange={this.onPasswordChange.bind(this)} value={this.props.password} className="form-control" id="password" name="password" placeholder="Password" />
							</div>

							<div className="col-md-12 form-group">

								<div className="creat_account">
									<input type="checkbox" id="f-option2" name="selector" />
									<label htmlFor="f-option2">Keep me logged in</label>
								</div>

							</div>
							<div className="col-md-12 form-group">
								<button type="submit" value="submit" className="primary-btn">Log In</button>
								<a href="#">Forgot Password?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
   );
}
}

const mapStateToProps = state => {
    console.log('1');
    console.log(state);
    console.log('2');
return {
    email: state.auth.email,
    password: state.auth.password
};
};


export default connect(mapStateToProps, { emailChanged, passwordChanged })(Login);
