
import React, { Component } from 'react';
import AsyncImage from './AsyncImage';

class AsyncImageDashboard extends Component {
    state = {
        loading: true,
        images: []
    }
    componentDidMount = async () => {
        let { url } = this.props;
        let {images} = this.state;

        if (!url) {
            this.setState({ loading: false });
        }
        if(!images.length){
            let response = await fetch(url);
            let images = await response.json();
            this.setState({images, loading: false});
        }

    }
    render() {
        let {images, loading} = this.state;
        if (loading) {
            return <div>
                Loading
            </div>
        }
        let toAdd = images.length % 3;
        for(let i=0; i < 3-toAdd; i++){
            images.push(null);
        }


        return <div className="async-image-dashboard">
            {images.map(img => <AsyncImage url={this.props.url} img={img} />)}
        </div>
    }
}
export default AsyncImageDashboard;