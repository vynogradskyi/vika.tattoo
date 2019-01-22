import {getAllImages, getImage} from '../controllers/images.ctrl';

export default (router) => {
    router.route('/images/:type/:filename').get(getImage);
    router.route('/images/:type').get(getAllImages);

}