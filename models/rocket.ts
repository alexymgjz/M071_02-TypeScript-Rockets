
class Rocket {
    
    public propursor:Propursor[]=new Array();
    public potenciaActual: number = 0;
    public potenciaMaxima: number = 0;

    constructor(public code:string) {

    }

    addPropulsor(prop:Propursor):void{
        this.propursor.push(prop);
        this.potenciaMaxima += prop.potencia;
    }

    getPropulsores():Propursor[]{
        return this.propursor;
    }

    setPotenciaActual(potencia: number){
        this.potenciaActual = potencia;
    }

    getPotenciaActual(){
        return this.potenciaActual;
    }


    Acelerar(){
        if (this.potenciaActual<this.potenciaMaxima) {
            return this.potenciaActual+=10
        }
    }

    Frenar(){
        if (this.potenciaActual>0) {
            return this.potenciaActual-=10
        } 
    }


}