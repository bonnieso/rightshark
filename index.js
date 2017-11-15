'use strict';

/**
 * Validate an email with given specs.
 * Default specs follow xxx@yy.zz pattern.
 * x can be a letter, integer, or symbol (".", "_", "-"). y and z can be a letter or number.
 * @param { string } email
 * @return { boolean }
 */
module.exports = function(email) {

  var name = email.split("@")[0].split("");
  var address = email.split("@")[1];
  var addressCheck = address.split(".");
  var domain = address.split(".")[0].split("");
  var extension = address.split(".")[1].split("");

  var validName = name.every(validateWithSymbols);
  var validDomain = domain.every(validate);
  var validExtension = extension.every(validate);

  function validate(element, index, array){
    var valid = /^[0-9a-zA-Z]+$/;
    return element.match(valid) ? true : false;
  }

  function validateWithSymbols(element, index, array){
    var valid = /^[\.0-9a-zA-Z_-]+$/;
    return element.match(valid) ? true : false;
  }

  return validName && validDomain && validExtension && addressCheck.length === 2 ? true : false;

};
