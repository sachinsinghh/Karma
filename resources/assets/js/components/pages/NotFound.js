import React, { Component } from 'react';


class NotFound extends Component {

    componentDidMount()
    {
        console.log('insdie blog');
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Not Found</h1>
            </div>
   );
}

}
export default NotFound;
