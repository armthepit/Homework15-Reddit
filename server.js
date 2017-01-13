const express = require('express');
const mongoose = require('mongoose')
const app = express();

const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/posts', posts);

mongoose.connect("MONGODB_URI: mongodb://heroku_3vtc7gnn:7hic1qlp58mke0o42559l5tnig@ds163718.mlab.com:63718/heroku_3vtc7gnn", function(err) {
	if(err) throw err;
	console.log('database connected');
});

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});

mongoose.connect("mongodb://heroku_l6drmvct:58e0a6rgkm90rdse98d9rj5fc6@ds145208.mlab.com:45208/heroku_l6drmvct", function(err) {
	if(err) throw err;
	console.log('database connected');
});
