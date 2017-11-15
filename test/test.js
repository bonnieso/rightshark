'use strict';

var expect = require('chai').expect;
var emailValidator = require('../index');

describe('emailValidator', function() {
    it('should check for valid name', function() {
        var resultUnderscore = emailValidator('hello_friend@bonnieso.com');
        var resultDash = emailValidator('hello-friend@bonnieso.com');
        var resultPeriod = emailValidator('hello.friend@bonnieso.com');
        expect(resultUnderscore).to.equal(true);
        expect(resultDash).to.equal(true);
        expect(resultPeriod).to.equal(true);
    });

    it('should check for valid domain', function() {
        var resultLetters = emailValidator('hello.friend@bonnieso.com');
        var resultNumbers = emailValidator('hello.friend@bonnie2.com');
        expect(resultLetters).to.equal(true);
        expect(resultNumbers).to.equal(true);
    });

    it('should check for valid extension', function() {
        var resultLetters = emailValidator('hello.friend@bonnieso.com');
        var resultNumbers = emailValidator('hello.friend@bonnieso.97');
        expect(resultLetters).to.equal(true);
        expect(resultNumbers).to.equal(true);
    });

    it('should check for invalid name', function() {
        var resultSpace = emailValidator('hello friend@bonnieso.com');
        var resultSymbols = emailValidator('[hellofriend]@bonnieso.com');
        expect(resultSpace).to.equal(false);
        expect(resultSymbols).to.equal(false);
    });

    it('should check for invalid domain', function() {
        var result = emailValidator('hello.friend@bonnie!.com');
        expect(result).to.equal(false);
    });

    it('should check for invalid extension', function() {
        var result = emailValidator('hello.friend@bonnieso.#1');
        expect(result).to.equal(false);
    });

});
