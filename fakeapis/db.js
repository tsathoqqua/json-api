var users = require('./users.json');
var posts = require('./posts.json');
var applications = require('./applications.json');
// Something more

function renameKey(obj, oldkey, newkey)
{
  obj[newkey]=obj[oldkey];
  delete obj[oldkey];
}

/*
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);
var hash = bcrypt.hashSync("lagkage", salt);
console.info(hash);
*/

applications.forEach( obj => renameKey( obj, 'cost', 'estimated_cost' ) );
console.info(applications);

module.exports = () => ({
  users: users,
  posts: posts,
  applications: applications
  // Something more
});
