require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const app = express();
const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

app.use(
	cors({
		origin: ['http://localhost:3002', 'http://localhost:3000'],
		credentials: true,
	}),
);
app.use(express.static('public'));
app.use(express.json());
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		saveUninitialized: false,
		resave: false,
	}),
);

app.use('/auth', authRoutes);
app.use('/posts', postsRoutes);

mongoose.connect(process.env.DATABASE_LINK, {
	useNewUrlParser: true,
});
const db = mongoose.connection;
db.once('open', () => console.log('Connected to MongoDB'));
db.on('err', err => console.error(err));

const port = 3001;

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
