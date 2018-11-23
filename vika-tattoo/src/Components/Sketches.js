
import React, {Component} from 'react';
import AsyncImageDashboard from './AsyncImageDashboard';
import config from '../config';

class Sketches extends Component{
    render(){
        return <div>
            <AsyncImageDashboard url={config.urls.images_sketches}/>
        </div>
    }
}
export default Sketches;