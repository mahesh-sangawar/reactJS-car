import express from 'express';
import webpack from 'webpack';
import path from 'path';
import config from '../webpack.config';
import open from 'open';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as requestHandler  from './requestHandler';

/* eslint-disable no-console */
const port = (process.env.PORT || 3000);
const app = express();
const compiler = webpack(config);

app.use(cors({
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false,
  'optionsSuccessStatus': 204
}));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '/build')));
app.get('/api/models', (req,res) => res.sendFile(path.normalize(__dirname + '/data/models.json')));
app.get('/api/makes', (req,res) => res.sendFile(path.normalize(__dirname + '/data/makes.json')));
app.get('/api/caroftheweek', (req,res) => res.send(requestHandler.getCarOftheWeek()));

// return 404 when api route not found
app.use('/api/*', (req, res) => res.status(404).send());

app.get('/', (req, res) => {
  res.sendFile(path.join( __dirname, '../src/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});

