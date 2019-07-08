const { expect } = require("chai");
const { Given, When, Then } = require("cucumber");

Given('калькулятор', function () {});

When('я делю {int} на {int}', function (x, y) {
	this.actual = x / y
});

Then('результат равен {int}', function (expected) {
	expect(this.actual).to.be.equal(expected);
});



