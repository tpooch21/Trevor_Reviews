const cassandra = require('cassandra-driver');

// Username and Password in cluster settings
const authProvider = new cassandra.auth.PlainTextAuthProvider('root', 'flamingo');

const contactPoints = ['localhost:9042'];

const client = new cassandra.Client({contactPoints: contactPoints, localDataCenter: 'datacenter1', authProvider: authProvider, keyspace: 'review'});

let query = 'INSERT INTO place (place_id, place_name) VALUES (uuid(), ?)';
let queryArgs = ['Cancun Getaway'];

client.execute(query, queryArgs, (err) => {
  if (err) {
    console.log('Error inserting data => ', err);
  } else {
    console.log('Connection successful: data inserted');
  }
});