import React, { Component } from 'react';


class AdminHome extends Component {

    componentDidMount()
    {
        console.log('insdie AdminHome');
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Amin Dashboard</h1>
            </div>
   );
}

}
export default AdminHome;
