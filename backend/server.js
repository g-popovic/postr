require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(
	cors({
		origin: '*',
	}),
);
app.use(express.static('public'));
app.user(express.json());

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
