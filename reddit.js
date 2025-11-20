// reddit.js
const fs = require('fs');
const _ = require('lodash');

// To Load JSON file from argument
const filePath = process.argv[2];
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// 1. All usernames (with repeats)
console.log(_.map(data, 'username'));

// 2. Usernames grouped with their comments
console.log(_.groupBy(data, 'username'));

// 3. Unique usernames
console.log(_.uniq(_.map(data, 'username')));

// 4. Sorted JSON object by username
console.log(_.orderBy(data, ['username'], ['asc']));
