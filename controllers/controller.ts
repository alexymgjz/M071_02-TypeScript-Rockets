
let rockets:Rocket[]=new Array();

function createRocket(code:string, propulsores: Propursor[]) {
    let rocket = new Rocket(code);
    propulsores.forEach(prop => {

        rocket.addPropulsor(prop);
    });
    rockets.push(rocket);
}
function mostrarTodos() {
    (<HTMLInputElement>document.getElementById('infoAll')).innerHTML =``;
    let val = '';
    rockets.forEach(rocket => {
        val += rocket.code + ': ';
        rocket.getPropulsores().forEach(propulsor => {
            val += ` ${propulsor.potencia}
            `
        });

        val += `potencia maxima ${rocket.potenciaMaxima} <br>
        `
        
    });
    (<HTMLInputElement>document.getElementById('infoAll')).innerHTML =`<p>${val}</p>`
}


function getRockets() {
    let val = '';
    rockets.forEach(rocket => {
        val += rocket.code + ': '
        rocket.getPropulsores().forEach(propulsor => {
            val += ` ${propulsor.potencia}
            `
        })

        val += `potencia maxima ${rocket.potenciaMaxima} <br>
        `
        
    })
    return val;
}

function fixtureData1() {    
    if (!rockets[0]){
    (<HTMLInputElement>document.getElementById('screen')).innerHTML+=''; 
    createRocket('32WESSDS', [new Propursor(10),new Propursor(30),new Propursor(80)]);    
    (<HTMLInputElement>document.getElementById('screen')).innerHTML +=`<img id="roket" src="../src/img/Rocket).svg" style="width: 90px; position: absolute; top:calc(85%);left:20px;"">`;
    (<HTMLInputElement>document.getElementById('info')).innerHTML =`<p>${getRockets()}</p>
    `;
    }else if(!rockets[1]){
        (<HTMLInputElement>document.getElementById('screen')).innerHTML+=''; 
        createRocket('32WESSDS', [new Propursor(10),new Propursor(30),new Propursor(80)]);    
        (<HTMLInputElement>document.getElementById('screen')).innerHTML +=`<img id="roket1" src="../src/img/Rocket).svg" style="width: 90px; position: absolute; top:calc(85%);left:600px;">`;
        (<HTMLInputElement>document.getElementById('info')).innerHTML =`<p>${getRockets()}</p>
        `;
    }else{
        createRocket('32WESSDS', [new Propursor(10),new Propursor(30),new Propursor(80)]);   
    }
}

function fixtureData2() {   
    if (!rockets[0]){
    (<HTMLInputElement>document.getElementById('screen')).innerHTML+=''; 
    createRocket('LDSFJA32',[new Propursor(30),new Propursor(40),new Propursor(50),new Propursor(50),new Propursor(30),new Propursor(10)]);   
    (<HTMLInputElement>document.getElementById('screen')).innerHTML +=`<img id="roket" src="../src/img/Rocket).svg" style="width: 90px; position: absolute; top:calc(85%);left:20px;"">`;
    (<HTMLInputElement>document.getElementById('info')).innerHTML =`<p>${getRockets()}</p>
    `;
    }else if (!rockets[1]) {
        (<HTMLInputElement>document.getElementById('screen')).innerHTML+=''; 
        createRocket('LDSFJA32',[new Propursor(30),new Propursor(40),new Propursor(50),new Propursor(50),new Propursor(30),new Propursor(10)]);   
        (<HTMLInputElement>document.getElementById('screen')).innerHTML +=`<img id="roket1" src="../src/img/Rocket).svg" style="width: 90px; position: absolute; top:calc(85%);left:600px;">`;
        (<HTMLInputElement>document.getElementById('info')).innerHTML =`<p>${getRockets()}</p>
        `;
    }else{
        createRocket('LDSFJA32',[new Propursor(30),new Propursor(40),new Propursor(50),new Propursor(50),new Propursor(30),new Propursor(10)]);
    }
    
}


function acelerarCohete() {
    if (rockets[0]){
        let velocidad :any = (rockets[0].Acelerar()); 
        
            console.log(velocidad);
            if (velocidad!= undefined) {
                (<HTMLInputElement>document.getElementById('velocidad')).innerText =`La velocidad actual del cohete 1 es de ${velocidad}`;
            velocidad = 21000 - (velocidad * 100);
            console.log(velocidad);

            (<HTMLInputElement>document.getElementById('roket')).animate([

            // keyframes
            { transform: `translateY(0px)` },
            { transform: `translateY(-430px)` }
            ], {
            // timing options
            duration:  velocidad,
            iterations: Infinity
            }
            );}else{
                (<HTMLInputElement>document.getElementById('velocidad')).innerText =`Limite de aceleracion   del cohete 1 alcanzado`;
            }
            return velocidad;

    }
}    

function frenarCohete() {
    if (rockets[0]){
    let velocidad :any = (rockets[0].Frenar()); 
    console.log(velocidad);
    let distance = 430;
    if (velocidad!= undefined ) {
        (<HTMLInputElement>document.getElementById('velocidad')).innerText =`La velocidad actual  del cohete 1 es de ${velocidad}`;
        velocidad = 21000 - (velocidad * 100);
        console.log(velocidad);
        if (velocidad==21000) {
            distance=0;
        } else {
            distance=430; 
        }

(<HTMLInputElement>document.getElementById('roket')).animate([
    // keyframes
    { transform: `translateY(0px)` },
    { transform: `translateY(-${distance}px)` }
    ], {
    // timing options
    duration:  velocidad,
    iterations: Infinity
    });}else{
        (<HTMLInputElement>document.getElementById('velocidad')).innerText =`Limite de frenada  del cohete 1 alcanzado`;
    }
    return velocidad;
}

}

function acelerarCohete1() {
    if(rockets[1]){
    let velocidad1 :any = (rockets[1].Acelerar()); 
console.log(velocidad1);
if (velocidad1!= undefined) {
    (<HTMLInputElement>document.getElementById('velocidad1')).innerText =`La velocidad actual del cohete 2 es de ${velocidad1}`;
velocidad1 = 21000 - (velocidad1 * 100);
console.log(velocidad1);


(<HTMLInputElement>document.getElementById('roket1')).animate([
// keyframes
{ transform: `translateY(0px)` },
{ transform: `translateY(-420px)` }
], {
// timing options
duration:  velocidad1,
iterations: Infinity
});}else{
    (<HTMLInputElement>document.getElementById('velocidad1')).innerText =`Limite de aceleracion del cohete 2 alcanzado`;
}
return velocidad1;
}


}
    

function frenarCohete1() {
    if(rockets[1]){
    let velocidad1 :any = (rockets[1].Frenar()); 
    console.log(velocidad1);
    
    if (velocidad1!= undefined ) {
        (<HTMLInputElement>document.getElementById('velocidad1')).innerText =`La velocidad actual del cohete 2 es de ${velocidad1}`;
        velocidad1 = 21000 - (velocidad1 * 100);
    console.log(velocidad1);
    let distance = 430;
    if (velocidad1==21000) {
        distance=0;
    } else {
        distance=430; 
    }
(<HTMLInputElement>document.getElementById('roket1')).animate([
    // keyframes
    { transform: `translateY(0px)` },
    { transform: `translateY(-${distance}px)` }
    ], {
    // timing options
    duration:  velocidad1,
    iterations: Infinity
    });}else{
        (<HTMLInputElement>document.getElementById('velocidad1')).innerText =`Limite de frenada del cohete 2 alcanzado`;
    }
    return velocidad1;
}

}





