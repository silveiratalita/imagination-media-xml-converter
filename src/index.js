const createInstance = require('./xmlConverter/XMLConverter');

/**
 * @param {*} jsonData jsdon file
 * @return {*} xmlfile instance
 */
module.exports.getInstance = (jsonData) => createInstance(jsonData);
