var moment = require('moment');

console.log(typeof new Date());


var date = moment().set({'year': 2013, 'month': 3}).format('MMMM YYYY');
console.log(date);
console.log(typeof date);

