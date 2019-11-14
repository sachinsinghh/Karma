import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addSlider, sliderName, sliderImage } from '../../actions';

class Slider extends Component {

    onSliderName(text)
    {
            this.props.sliderName(text.target.value);
    }
    onFileUpload(text)
    {
        let files = text.target.files;
        let reader = new FileReader();
        reader.readAsDataURL(files[0]);
        reader.onload = (text) => {
            console.log(text.target.result);
            this.props.sliderImage(text.target.result);
        }

    }

    onButtonPress()
    {
        const { name, image } = this.props;
        this.props.addSlider({ name, image });
        console.log('put redirection here');
    }

    renderButton()
    {
        if (this.props.loading)
        {
            return (<Loader 
                type="Puff"
                color="#ff6c00"
                height="50"	
                width="50"
            />);
        }
        return (
            <Button onClick={this.onButtonPress.bind(this)} variant="primary" type="button">
            Submit
          </Button>   
        );
    }

    renderError()
    {
        if (this.props.error)
        {
            return (
               <Alert variant='danger'>{this.props.error}</Alert>
            );
        }
    }

    render() {
        let authRedirect = null;
        if (!this.props.isAuthenticated)
        {
          //  authRedirect = <Redirect to='/login' />;
        }
        if(this.props.isSubmitted)
        {
           
            authRedirect = <Redirect to='/admin/sliderList' />;
        }
        return (
            <div>
                {authRedirect}
                {this.renderError()}
           <Form>
  <Form.Group>
    <Form.Label>Slider Name</Form.Label>
    <Form.Control onChange={this.onSliderName.bind(this)} value={this.props.name} type="email" placeholder="Slider Name" />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Image</Form.Label>
    <Form.Control type="file" onChange={this.onFileUpload.bind(this)} placeholder="file" />
  </Form.Group>
  <Form.Group controlId="formBasicChecbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  {this.renderButton()}
</Form>
</div>
         
   );
}

}

const mapStateToProps = state => {
console.warn('check reducer end', state);
return {
    error: state.admin.error,
    loading: state.admin.loading,
    isAuthenticated: state.auth.token !== null,
    name: state.admin.sliderName,
    token: state.auth.token,
    image: state.admin.sliderImage,
    isSubmitted: state.admin.submitted
};
};
export default connect(mapStateToProps, { addSlider, sliderName, sliderImage })(Slider);

