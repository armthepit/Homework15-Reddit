const express = require('express');
const mongoose = require('mongoose')
const app = express();

const posts = require('./api/routes/posts');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/posts', posts);

mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds163718.mlab.com:63718/heroku_3vtc7gnn", function(err) {
	if(err) throw err;
	console.log('database connected');
});

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
