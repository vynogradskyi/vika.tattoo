import fs, { read } from 'fs';
import path from 'path';

const dirPath = type => path.join(__dirname, '..', 'data', type);
const imgPath = (type, name) => path.join(__dirname, '..', 'data', type, name);
const readdir = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, content) => {
      if (err) {
        reject(err);
      }
      resolve(content);
    })
  });
}
const allowedTypes = ['works', 'sketches'];


export const getAllImages = async ({ params }, res, next) => {
  let type = params.type;
  if (!allowedTypes.includes(type)) {
    return res.status(200).json([]);
  }
  try {
    let names = await readdir(dirPath(params.type));
    names = names.filter(name => (/\.(gif|jp?g|tiff|png)$/i).test(name))
    return res.status(200).json(names || []);
  } catch (error) {
    console.error('Image Controller: Error reading file', error)
  }
}

export const getImage = async ({ params }, res, next) => {
  try {
    console.log('Here')
    let { type, filename } = params;
    if (!allowedTypes.includes(type)) {
      return res.status(200).json([]);
    }

    let options = {
      root: dirPath(type),
      dotfiles: 'deny',
      headers: {
        'x-timestamp': Date.now(),
        'x-sent': true
      }
    }

    res.sendFile(filename, options, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`Image Controller: ${filename} sent`);
      }
    })

  } catch (error) {
    console.error('Image Controller: Error reading file', error)
  }

}
