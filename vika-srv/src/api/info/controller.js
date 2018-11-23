
let info = {
  fb: {link: 'https://www.facebook.com/vinogradska.tattoo/', text: '@vinogradska.tattoo'},
  instagram: {link: 'https://www.instagram.com/vinogradska.tattoo/', text: '@vinogradska.tattoo'},
  phone: '+48 883 784 707',
  email: {mailto: 'viktoria.dovgopol@gmail.com ', text: '@vinogradska.tattoo'},
  skFb: {link: 'https://www.facebook.com/tattooskullmaster/', text: '@skullmaster.tattoo'},
  skInstagram:{link: 'https://www.instagram.com/skullmaster.tattoo/', text: '@skullmaster.tattoo'}

}


export const show = ({ params }, res, next) =>
  res.status(200).json(info)



