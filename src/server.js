//ES6 
import express from "express"; 
const app = express(); 
//es6// 
import es6, {number} from "./auth/es6.js"
//import * as es6 from "./auth/es6.js";
const es5 = require("./auth/es5.js")

app.listen (9000, () => {
    console.log(es5)
    console.log("El servidor esta escuchando correctamente en el puerto 9000...");
})


//ES5
/*const express = require("express")*/

