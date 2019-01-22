import express from 'express';
import cors from 'cors';    
import bodyParser from 'body-parser';
import helmet from 'helmet';

import path from 'path';

const indexPath = path.join(__dirname, '..', 'build', 'index.html');
const staticPath = path.join(__dirname, '..', 'build');
import routes from './routes';

const app = express();
const router = express.Router();

let port = process.env.PORT || 5000;
routes(router);

app.use(cors());
app.use(express.static(staticPath));
app.use(bodyParser.json());
app.use(helmet());
app.use('/api', router);
app.get('/*', (req, res) => {
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Server started at port: ${port}`);
})
