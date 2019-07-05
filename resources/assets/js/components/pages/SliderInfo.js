import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, thead, tr, th, Alert } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { changeStatusFalse } from '../../actions';


class SliderInfo extends Component {

    constructor(props) {
        super(props);
        this.props.changeStatusFalse();
    }

    renderSucess()
    {
        if (this.props.success)
        {
            return (
               <Alert variant='danger'>{this.props.success}</Alert>
            );
        }
    }

    render() {
        return (
            <div>
                
                {this.renderSucess()}
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>#</th>
      <th>Image</th>
      <th>Slider Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
</div>
        );
    }

}

const mapStateToProps = state => {
    return {
        // error: state.admin.error,
        // loading: state.admin.loading,
        // isAuthenticated: state.auth.token !== null,
        // name: state.admin.sliderName,
        // token: state.auth.token,
        // image: state.admin.sliderImage,
        success: state.admin.success,
        removeSuccess: state.admin.removeSuccess
    };
    };

export default connect(mapStateToProps, { changeStatusFalse })(SliderInfo);
