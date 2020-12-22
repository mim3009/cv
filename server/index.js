const path = require('path');
const express = require('express');

const PORT = 8282;
const app = express();

app.use(express.static(path.resolve(__dirname, '../app/static/dist')));

app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, '../app/static/dist/home/index.html'));
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
