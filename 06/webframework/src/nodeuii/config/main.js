import _ from 'lodash';
import local from './local';
import path from 'path';

const server = {
  "port" : 80
};

let config = {
  "viewDir":path.join(__dirname,'..','views'),
  "staticDir":path.join(__dirname,'..','assets'),
  "env": process.env.NODE_ENV
}
config = _.extend(config,local);
if(config.env == "production"){ 
  config = _.extend(config,server);
}

export default config;