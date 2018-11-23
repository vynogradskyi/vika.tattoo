
import React, { Component } from 'react';

class AsyncImage extends Component {
    
    render() {
        let{url, img} = this.props;
        return <div className="image-dashboard-item">
            {img && <img src={`${url}/${img}`} />}
        </div>
    }
}
export default AsyncImage;