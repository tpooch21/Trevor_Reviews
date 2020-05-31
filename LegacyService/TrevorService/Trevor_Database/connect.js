const cassandra = require('cassandra-driver');

// Username and Password in cluster settings
const authProvider = new cassandra.auth.PlainTextAuthProvider('root', 'flamingo');

const contactPoints = ['localhost:9042'];

const client = new cassandra.Client({contactPoints: contactPoints, localDataCenter: 'datacenter1', authProvider: authProvider, keyspace: 'bnbreviews'});

client.connect((err) => {
  if (err) {
    console.log('Error connecting to db => ', err);
  } else {
    console.log('Connection to db successful!');
  }
});

module.exports = {
  client
};

