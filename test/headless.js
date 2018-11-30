global.window = global;
global.assert = require('chai').assert;
require('../src/cipher');
require("../src/cipherSpecial")
require('./cipher.spec.js');