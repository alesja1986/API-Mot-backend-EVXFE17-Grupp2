'use strict';

var utils = require('../utils/writer.js');
var Email = require('../service/EmailService');

module.exports.apiEmailGET = function apiEmailGET (req, res, next) {
  Email.apiEmailGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
