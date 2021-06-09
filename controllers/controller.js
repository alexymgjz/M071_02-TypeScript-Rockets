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
function acelerarCohete() {
    if (rockets[0]) {
        var velocidad = (rockets[0].Acelerar());
        console.log(velocidad);
        if (velocidad != undefined) {
            document.getElementById('velocidad').innerText = "La velocidad actual del cohete 1 es de " + velocidad;
            velocidad = 21000 - (velocidad * 100);
            console.log(velocidad);
            document.getElementById('roket').animate([
                // keyframes
                { transform: "translateY(0px)" },
                { transform: "translateY(-430px)" }
            ], {
                // timing options
                duration: velocidad,
                iterations: Infinity
            });
        }
        else {
            document.getElementById('velocidad').innerText = "Limite de aceleracion   del cohete 1 alcanzado";
        }
        return velocidad;
    }
}
function frenarCohete() {
    if (rockets[0]) {
        var velocidad = (rockets[0].Frenar());
        console.log(velocidad);
        var distance = 430;
        if (velocidad != undefined) {
            document.getElementById('velocidad').innerText = "La velocidad actual  del cohete 1 es de " + velocidad;
            velocidad = 21000 - (velocidad * 100);
            console.log(velocidad);
            if (velocidad == 21000) {
                distance = 0;
            }
            else {
                distance = 430;
            }
            document.getElementById('roket').animate([
                // keyframes
                { transform: "translateY(0px)" },
                { transform: "translateY(-" + distance + "px)" }
            ], {
                // timing options
                duration: velocidad,
                iterations: Infinity
            });
        }
        else {
            document.getElementById('velocidad').innerText = "Limite de frenada  del cohete 1 alcanzado";
        }
        return velocidad;
    }
}
function acelerarCohete1() {
    if (rockets[1]) {
        var velocidad1 = (rockets[1].Acelerar());
        console.log(velocidad1);
        if (velocidad1 != undefined) {
            document.getElementById('velocidad1').innerText = "La velocidad actual del cohete 2 es de " + velocidad1;
            velocidad1 = 21000 - (velocidad1 * 100);
            console.log(velocidad1);
            document.getElementById('roket1').animate([
                // keyframes
                { transform: "translateY(0px)" },
                { transform: "translateY(-420px)" }
            ], {
                // timing options
                duration: velocidad1,
                iterations: Infinity
            });
        }
        else {
            document.getElementById('velocidad1').innerText = "Limite de aceleracion del cohete 2 alcanzado";
        }
        return velocidad1;
    }
}
function frenarCohete1() {
    if (rockets[1]) {
        var velocidad1 = (rockets[1].Frenar());
        console.log(velocidad1);
        if (velocidad1 != undefined) {
            document.getElementById('velocidad1').innerText = "La velocidad actual del cohete 2 es de " + velocidad1;
            velocidad1 = 21000 - (velocidad1 * 100);
            console.log(velocidad1);
            var distance = 430;
            if (velocidad1 == 21000) {
                distance = 0;
            }
            else {
                distance = 430;
            }
            document.getElementById('roket1').animate([
                // keyframes
                { transform: "translateY(0px)" },
                { transform: "translateY(-" + distance + "px)" }
            ], {
                // timing options
                duration: velocidad1,
                iterations: Infinity
            });
        }
        else {
            document.getElementById('velocidad1').innerText = "Limite de frenada del cohete 2 alcanzado";
        }
        return velocidad1;
    }
}
