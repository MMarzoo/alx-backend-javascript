const express = require('express');

const app = express();
const host = '127.0.0.1';
const port = 1245;

app.get('/', (req, res) => {
	res.send('Hello Holberton School!')
});

app.listen(port, () => {
	console.log(`Server listening at http://${host}:${port}`);
});

module.exports = app;
