var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  headers: { 'Access-Control-Allow-Origin': '*' }
}).listen('3000');
