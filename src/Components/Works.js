
import React, {Component} from 'react';
import AsyncImageDashboard from './AsyncImageDashboard';
import config from '../config';

class Works extends Component{
    render(){
        return <div>
            <AsyncImageDashboard url={config.urls.images_works}/>
        </div>
    }
}
export default Works;