"use strict";

var _express = _interopRequireDefault(require("express"));
var _application = require("express/lib/application");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
app.listen(4000);
console.log('Server listen on port', 4000);