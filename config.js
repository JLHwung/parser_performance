const babelParse = require("@babel/parser/new/index").parse;
const acornParse = require("acorn").parse;
const esprimaParse = require("esprima").parse;
const cherowParse = require("cherow").parse;

exports.files = [
  "./fixtures/es5/angular.js",
  "./fixtures/es5/ember.debug.js",
  "./fixtures/es5/babylon-dist.js",
  "./fixtures/es5/jquery.js",
  "./fixtures/es5/backbone.js",
  "./fixtures/es5/react-with-addons.js"
];

exports.parsers = {
  acorn: {
    parse: acornParse,
    options: { sourceType: "script" }
  },
  babel: {
    parse: babelParse,
    options: { sourceType: "script" }
  },
  cherow: {
    parse: cherowParse,
    options: { sourceType: "script" }
  },
  esprima: {
    parse: esprimaParse,
    options: { sourceType: "script" }
  }
};
