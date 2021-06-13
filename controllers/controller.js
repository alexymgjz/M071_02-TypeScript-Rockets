"use strict";
var rockets = new Array();
function createRocket(code, propulsores) {
    var rocket = new Rocket(code);
    propulsores.forEach(function (prop) {
        rocket.addPropulsor(prop);
    });
    rockets.push(rocket);
}
function mostrarTodos() {
    document.getElementById('infoAll').innerHTML = "";
    var val = '';
    rockets.forEach(function (rocket) {
        val += rocket.code + ': ';
        rocket.getPropulsores().forEach(function (propulsor) {
            val += " " + propulsor.potencia + "\n            ";
        });
        val += "potencia maxima " + rocket.potenciaMaxima + " <br>\n        ";
    });
    document.getElementById('infoAll').innerHTML = "<p>" + val + "</p>";
}
function getRockets() {
    var val = '';
    rockets.forEach(function (rocket) {
        val += rocket.code + ': ';
        rocket.getPropulsores().forEach(function (propulsor) {
            val += " " + propulsor.potencia + "\n            ";
        });
        val += "potencia maxima " + rocket.potenciaMaxima + " <br>\n        ";
    });
    return val;
}
function fixtureData1() {
    if (!rockets[0]) {
        document.getElementById('screen').innerHTML += '';
        createRocket('32WESSDS', [new Propursor(10), new Propursor(30), new Propursor(80)]);
        document.getElementById('screen').innerHTML += "<img id=\"roket\" src=\"../src/img/Rocket).svg\" style=\"width: 90px; position: absolute; top:calc(85%);left:20px;\"\">";
        document.getElementById('info').innerHTML = "<p>" + getRockets() + "</p>\n    ";
    }
    else if (!rockets[1]) {
        document.getElementById('screen').innerHTML += '';
        createRocket('32WESSDS', [new Propursor(10), new Propursor(30), new Propursor(80)]);
        document.getElementById('screen').innerHTML += "<img id=\"roket1\" src=\"../src/img/Rocket).svg\" style=\"width: 90px; position: absolute; top:calc(85%);left:600px;\">";
        document.getElementById('info').innerHTML = "<p>" + getRockets() + "</p>\n        ";
    }
    else {
        createRocket('32WESSDS', [new Propursor(10), new Propursor(30), new Propursor(80)]);
    }
}
function fixtureData2() {
    if (!rockets[0]) {
        document.getElementById('screen').innerHTML += '';
        createRocket('LDSFJA32', [new Propursor(30), new Propursor(40), new Propursor(50), new Propursor(50), new Propursor(30), new Propursor(10)]);
        document.getElementById('screen').innerHTML += "<img id=\"roket\" src=\"../src/img/Rocket).svg\" style=\"width: 90px; position: absolute; top:calc(85%);left:20px;\"\">";
        document.getElementById('info').innerHTML = "<p>" + getRockets() + "</p>\n    ";
    }
    else if (!rockets[1]) {
        document.getElementById('screen').innerHTML += '';
        createRocket('LDSFJA32', [new Propursor(30), new Propursor(40), new Propursor(50), new Propursor(50), new Propursor(30), new Propursor(10)]);
        document.getElementById('screen').innerHTML += "<img id=\"roket1\" src=\"../src/img/Rocket).svg\" style=\"width: 90px; position: absolute; top:calc(85%);left:600px;\">";
        document.getElementById('info').innerHTML = "<p>" + getRockets() + "</p>\n        ";
    }
    else {
        createRocket('LDSFJA32', [new Propursor(30), new Propursor(40), new Propursor(50), new Propursor(50), new Propursor(30), new Propursor(10)]);
    }
}
var sumatoriaPropulsores = 0;
var sumatoriaPropulsores1 = 0;
function sumatoria(value) {
    switch (value) {
        case 0:
            rockets[0].propursor.forEach(function (element) {
                sumatoriaPropulsores += element.potencia;
            });
            console.log('sumatoriaPropulsores ' + sumatoriaPropulsores);
            break;
        case 1:
            rockets[1].propursor.forEach(function (element) {
                sumatoriaPropulsores1 += element.potencia;
            });
            console.log('sumatoriaPropulsores1 ' + sumatoriaPropulsores1);
            break;
    }
}
var salto = 10;
var salto1 = 10;
var velocidadTotal = 0;
var velocidadTotal1 = 0;
function acelerarCohete(value) {
    switch (value) {
        case 0:
            if (rockets[0]) {
                if (sumatoriaPropulsores == 0) {
                    sumatoria(0);
                }
                var velocidad = (rockets[0]);
                if (velocidad != undefined) {
                    rockets[0].propursor.forEach(function (popursor) {
                        if (popursor.potencia >= salto && velocidadTotal < sumatoriaPropulsores) {
                            velocidadTotal += 10;
                            console.log('velocidadTotal ' + velocidadTotal);
                        }
                        console.log('popursor.potencia ' + popursor.potencia);
                    });
                    if (salto >= 0 && velocidadTotal < sumatoriaPropulsores) {
                        salto += 10;
                    }
                    console.log(salto);
                    console.log('velocidadTotal ' + velocidadTotal);
                    if (sumatoriaPropulsores == velocidadTotal) {
                        document.getElementById('velocidad').innerText = "Limite de potencia del cohete 1 alcanzado";
                    }
                    else {
                        document.getElementById('velocidad').innerText = "La potencia actual del cohete 1 es de " + velocidadTotal;
                    }
                    var timing = (30000) - (velocidadTotal * 100);
                    console.log('timing ' + timing);
                    document.getElementById('roket').animate([
                        // keyframes
                        { transform: "translateY(0px)" },
                        { transform: "translateY(-420px)" }
                    ], {
                        // timing options
                        duration: timing,
                        iterations: Infinity
                    });
                }
                return salto;
            }
            break;
        case 1:
            if (rockets[1]) {
                if (sumatoriaPropulsores1 == 0) {
                    sumatoria(1);
                }
                var velocidad1 = (rockets[1]);
                if (velocidad1 != undefined) {
                    rockets[1].propursor.forEach(function (popursor) {
                        if (popursor.potencia >= salto1 && velocidadTotal1 < sumatoriaPropulsores1) {
                            velocidadTotal1 += 10;
                            console.log('velocidadTotal1 ' + velocidadTotal1);
                        }
                        console.log('popursor.potencia ' + popursor.potencia);
                    });
                    if (salto1 >= 0 && velocidadTotal < sumatoriaPropulsores) {
                        salto1 += 10;
                    }
                    console.log(salto1);
                    console.log('velocidadTotal1 ' + velocidadTotal1);
                    if (sumatoriaPropulsores1 == velocidadTotal1) {
                        document.getElementById('velocidad1').innerText = "Limite de aceleracion del cohete 1 alcanzado";
                    }
                    else {
                        document.getElementById('velocidad1').innerText = "La aceleracion actual del cohete 1 es de " + velocidadTotal1;
                    }
                    var timing1 = (30000) - (velocidadTotal1 * 100);
                    console.log('timing1 ' + timing1);
                    document.getElementById('roket1').animate([
                        // keyframes
                        { transform: "translateY(0px)" },
                        { transform: "translateY(-420px)" }
                    ], {
                        // timing options
                        duration: timing1,
                        iterations: Infinity
                    });
                }
                return salto1;
            }
            break;
    }
}
function frenarCohete(value) {
    switch (value) {
        case 0:
            if (rockets[0] && velocidadTotal > 0) {
                if (sumatoriaPropulsores == 0) {
                    sumatoria(0);
                }
                var velocidad = (rockets[0]);
                if (velocidad != undefined) {
                    rockets[0].propursor.forEach(function (popursor) {
                        if (popursor.potencia <= salto) {
                            if (velocidadTotal > 0) {
                                velocidadTotal -= 10;
                            }
                            else if (velocidadTotal <= 0) {
                                velocidadTotal = 0;
                            }
                            console.log('velocidadTotal ' + velocidadTotal);
                        }
                        console.log('popursor.potencia ' + popursor.potencia);
                    });
                    if (salto > 0) {
                        salto -= 10;
                    }
                    if (salto < 10) {
                        salto = 10;
                    }
                    console.log('salto' + salto);
                    console.log('velocidadTotal ' + velocidadTotal);
                    if (sumatoriaPropulsores == velocidadTotal) {
                        document.getElementById('velocidad').innerText = "Limite de potencia del cohete 1 alcanzado";
                    }
                    else {
                        document.getElementById('velocidad').innerText = "La potencia actual del cohete 1 es de " + velocidadTotal;
                    }
                    var timing = (30000) - (velocidadTotal * 100);
                    var distance = 420;
                    if (velocidadTotal <= 0) {
                        distance = 0;
                    }
                    document.getElementById('roket').animate([
                        // keyframes
                        { transform: "translateY(0px)" },
                        { transform: "translateY(-" + distance + "px)" }
                    ], {
                        // timing options
                        duration: timing,
                        iterations: Infinity
                    });
                }
                return salto;
            }
            break;
        case 1:
            if (rockets[1] && velocidadTotal1 > 0) {
                var velocidad1 = (rockets[1]);
                if (velocidad1 != undefined) {
                    rockets[1].propursor.forEach(function (popursor) {
                        if (popursor.potencia <= salto1) {
                            if (velocidadTotal1 > 0) {
                                velocidadTotal1 -= 10;
                            }
                            else if (velocidadTotal1 <= 0) {
                                velocidadTotal1 = 0;
                            }
                            console.log('velocidadTotal1 ' + velocidadTotal1);
                        }
                        console.log('popursor.potencia1 ' + popursor.potencia);
                    });
                    if (salto1 > 0) {
                        salto1 -= 10;
                    }
                    if (salto1 < 10) {
                        salto1 = 10;
                    }
                    console.log('salto1' + salto1);
                    console.log('velocidadTotal1 ' + velocidadTotal1);
                    if (sumatoriaPropulsores1 == velocidadTotal1) {
                        document.getElementById('velocidad').innerText = "Limite de potencia del cohete 1 alcanzado";
                    }
                    else {
                        document.getElementById('velocidad').innerText = "La potencia actual del cohete 1 es de " + velocidadTotal;
                    }
                    var timing1 = (30000) - (velocidadTotal1 * 100);
                    var distance = 420;
                    if (velocidadTotal1 <= 0) {
                        distance = 0;
                    }
                    document.getElementById('roket1').animate([
                        // keyframes
                        { transform: "translateY(0px)" },
                        { transform: "translateY(-" + distance + "px)" }
                    ], {
                        // timing options
                        duration: timing1,
                        iterations: Infinity
                    });
                }
                return salto;
            }
            break;
    }
}
