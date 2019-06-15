import React, { Component } from 'react';


class Slider extends Component {

    componentDidMount()
    {
        console.log('insdie Slider');
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>Slider</h1>
            </div>
   );
}

}
export default Slider;
