/*
** Custom functions module.
** Some helper functions at the top, and then mapping functions that JSON objects can be parsed through. 
** applicationMapping(ob) is an example of such a function, renaming and removing fields from the JSON objects.
*/

function renameKey(obj, oldkey, newkey) {
    obj[newkey] = obj[oldkey];
    delete obj[oldkey];
}

function deleteKey(obj, key) {
    delete obj[key];
}

function cryptPassword(str) {
    var bcrypt = require('bcryptjs');
    return bcrypt.hashSync(str, bcrypt.genSaltSync(10));
}

function applicationMapping(ob) {
    //Example rename of a key
    ob.forEach(obj => renameKey(obj, 'cost', 'estimated_cost'));
    //Example deletion of a key
    ob.forEach(obj => deleteKey(obj, 'secret'));
    //Add more mapping here.
    //...
    return ob;
}

// Other mapping functions

module.exports = { renameKey, cryptPassword, applicationMapping };
