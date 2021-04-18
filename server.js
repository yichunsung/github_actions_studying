const express = require('express');
const path = require('path');

const app = express();

const PORT = 3000;

// const HOST = process.env.API_BASE_URL || 'https://interview-api.elk-tree.site';
// console.log('Start proxy url in', process.env.API_BASE_URL);

const TIME_OUT = 30 * 1e3;

// app.use(timeout(TIME_OUT));
/*app.use((req, res, next) => {
  if (!req.timedout) next();
});*/

const options = {
  headers: {
    'strict-transport-security': 'max-age=31536000'
  }
}

app.use(express.static(path.join(__dirname, './build')));

// app.use('/api', createProxyMiddleware({ target: HOST, changeOrigin: true }));

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, './build', 'index.html'), options);
 });

app.listen(PORT, function(){
	console.log(`Start in ${PORT}`);
});