"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var groupBy_1 = require("./groupBy");
var input = [1, 2, 3, 4, 5, 6, 7, 8];
var result = groupBy_1.groupBy(input, 3);
console.log(result);
