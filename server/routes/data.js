import {getContactInfo} from '../controllers/data.ctrl';

export default (router) => {
    router.route('/info').get(getContactInfo);
}