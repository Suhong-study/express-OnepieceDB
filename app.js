import express from "express"
import mysql from "mysql"

const app = express()
const dbc = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'mysql1234',
	database: 'onepiecedb'
})

dbc.connect();

app.listen('3000', () => {
	console.log('Server Started')
})

app.get('/', (req, res) => {
	const query = 'select * from person';
	dbc.query(query, (err, rows) => {
		if (err) return console.log(err);
		res.send(rows);
	})
});

app.use('/image', express.static('images'));