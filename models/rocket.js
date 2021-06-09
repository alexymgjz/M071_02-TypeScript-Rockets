"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(code) {
        this.propursor = new Array();
        this.potenciaActual = 0;
        this.potenciaMaxima = 0;
        this.code = code;
    }
    Rocket.prototype.addPropulsor = function (prop) {
        this.propursor.push(prop);
        this.potenciaMaxima += prop.potencia;
    };
    Rocket.prototype.getPropulsores = function () {
        return this.propursor;
    };
    Rocket.prototype.setPotenciaActual = function (potencia) {
        this.potenciaActual = potencia;
    };
    Rocket.prototype.getPotenciaActual = function () {
        return this.potenciaActual;
    };
    Rocket.prototype.Acelerar = function () {
        if (this.potenciaActual < this.potenciaMaxima) {
            return this.potenciaActual += 10;
        }
    };
    Rocket.prototype.Frenar = function () {
        if (this.potenciaActual > 0) {
            return this.potenciaActual -= 10;
        }
    };
    return Rocket;
}());
