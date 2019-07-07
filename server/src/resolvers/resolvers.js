const { merge } = require('lodash');
const person = require('./person');

const resolvers = {};

module.exports = merge(resolvers, person);
