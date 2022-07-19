"use strict";
var _a, _b;
exports.__esModule = true;
var readlineSync = require('readline-sync');
var months_1 = require("./months");
var seasons_1 = require("./seasons");
var monthsNames = Object.values(months_1["default"]);
var choiceMonth = readlineSync.keyInSelect(monthsNames, "Escolha um mês do ano");
var southSeason = (_a = {},
    _a[seasons_1["default"].OUTONO] = [months_1["default"].MARCO, months_1["default"].ABRIL, months_1["default"].MAIO, months_1["default"].JUNHO],
    _a[seasons_1["default"].INVERNO] = [months_1["default"].JUNHO, months_1["default"].JULHO, months_1["default"].AGOSTO, months_1["default"].SETEMBRO],
    _a[seasons_1["default"].PRIMAVERA] = [months_1["default"].SETEMBRO, months_1["default"].OUTUBRO, months_1["default"].NOVEMBRO, months_1["default"].DEZEMBRO],
    _a[seasons_1["default"].VERAO] = [months_1["default"].DEZEMBRO, months_1["default"].JANEIRO, months_1["default"].FEVEREIRO, months_1["default"].MARCO],
    _a);
var northSeason = (_b = {},
    _b[seasons_1["default"].OUTONO] = southSeason[seasons_1["default"].PRIMAVERA],
    _b[seasons_1["default"].INVERNO] = southSeason[seasons_1["default"].VERAO],
    _b[seasons_1["default"].PRIMAVERA] = southSeason[seasons_1["default"].OUTONO],
    _b[seasons_1["default"].VERAO] = southSeason[seasons_1["default"].INVERNO],
    _b);
var hemisphere = {
    Norte: northSeason,
    Sul: southSeason
};
var choiceHemisphere = readlineSync.keyInSelect(Object.keys(hemisphere), "Escolha o hemisfério");
var selectedMonth = [choiceMonth];
var selectedHemisphere = Object.keys(hemisphere)[choiceHemisphere];
console.log("M\u00EAs: \n".concat(selectedMonth));
console.log("Hemisf\u00E9rio: \n".concat(selectedHemisphere));
console.log("Esta\u00E7\u00F5es:");
