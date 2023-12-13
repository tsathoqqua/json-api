
var _f = require ('../lib/functions.js');
var users = require('./users.json');
var posts = require('./posts.json');
var applications = require('./applications.json');
// Something more

applications = _f.applicationMapping(applications);

module.exports = () => ({
  users: users,
  posts: posts,
  applications: applications
  // Something more
});
