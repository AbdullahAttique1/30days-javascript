// task 7
const axios = require('axios');
// task 6

// Load the full build.

var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');

// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');

// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');


// console.log(object);

//task 7

axios.get('https://dummyjson.com/c/35c5-d44f-44a7-841e')
  .then(function (response) {
    // handle success
    console.log(response.data.products[0].id);
    console.log(response.data.products[0].title);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log("Done");
    // always executed
  });