const mysql = require('mysql2/promise');

const connection = mysql.createPool({
	host: 'localhost',
	user: 'queite',
	password: 'qsc2022',
	database: 'users_crud' });

module.exports = connection;