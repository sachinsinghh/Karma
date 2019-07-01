import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addSlider, sliderName } from '../../actions';

class Slider extends Component {

    componentDidMount()
    {
        console.log('insdie Slider');
        console.log(this.props);
    }
    onAddSlider(text)
    {
        console.log('test');
        console.log(text);
    }
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
            console.log('image',text.target.result);
        }

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
            <Button onClick={this.onAddSlider.bind(this)} variant="primary" type="button">
            Submit
          </Button>   
        );
    }

    render() {
   
        let authRedirect = null;
        if (!this.props.isAuthenticated)
        {
          //  authRedirect = <Redirect to='/login' />;
        }
        return (
            <div>
                {authRedirect}
           <Form>
  <Form.Group>
    <Form.Label>Slider Name</Form.Label>
    <Form.Control onChange={this.onSliderName.bind(this)} type="email" placeholder="Enter email" />
   
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
return {
    error: state.auth.error,
    loading: state.auth.loading,
    isAuthenticated: state.auth.token !== null
};
};
export default connect(mapStateToProps, { addSlider, sliderName })(Slider);

