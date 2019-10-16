"use strict";

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
//importsssss// 

import es6, {number} from "./auth/es6.js"

//ES6 
var app = (0, _express["default"])();
app.listen(9000, function () {
  console.log(es6, number)
  console.log("El servidor esta escuchando correctamente en el puerto 9000...");
}); //ES5


