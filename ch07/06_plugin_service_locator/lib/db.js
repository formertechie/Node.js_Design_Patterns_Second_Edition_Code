"use strict";

const level = require('level');
const sublevel = require('level-sublevel');

module.exports = function(serviceLocator) {
  const dbName = serviceLocator.get('dbName');

  return sublevel(
    level(dbName, {valueEncoding: 'json'})
  );
};
