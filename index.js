require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 8080

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (_req, res) => {
	res.send("Welcome to Nikshop API");
});

app.use('/users', require("./routes/user"));
app.use('/', require('./routes/entry'));

app.use((err, _req, res, _next) => {
	res.status(500).json({"message": "Internal server error"});
	console.error(err);
});

app.listen(port, () => console.log(`Listening at port ${port}`));
