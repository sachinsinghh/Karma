import React, { Component } from 'react';


class Blog extends Component {

    componentDidMount()
    {
        console.log('insdie blog');
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h1>blog</h1>
            </div>
   );
}

}
export default Blog;
