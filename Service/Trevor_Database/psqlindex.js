const { Client } = require('pg');

const client = new Client({
  user: 'trevor',
  host: 'localhost',
  password: 'flamingo',
  database: 'bnbreviews'
});

client.connect((err) => {
  if (err) {
    console.log('Connection to db failed', err);
  } else {
    console.log('Connection to db successful');
  }
});

module.exports = client;

