import React, {Component} from 'react';
import { connect } from 'react-redux';

class LibraryList extends Component {
    render() {     
        return (
            <div>
        <h1>{this.props.libraries}</h1>
       </div>
        ); 
    }
}

const mapStateToProps = state => {
    
return { libraries: state.libraries };
};

export default connect(mapStateToProps)(LibraryList);
