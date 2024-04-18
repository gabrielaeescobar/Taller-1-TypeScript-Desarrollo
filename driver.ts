export class Driver{

    constructor(public nombre: string, 
                public descripcion: string, 
                public imagenPrincipal: string, 
                public pilotoRivalidad: string, 
                public descripcionRivalidad:string, 
                public fotoRivalidad: string, 
                public granPrixGanados1: string[],  
                public granPrixGanados2: string[],        
                public fotoGranPrix: string,
                public legadoTitulo1: string,
                public legadoDescripcion1:string,
                public legadoTitulo2: string,
                public legadoDescripcion2:string,
                public fotoLegado:string){
    }

    public darCantidadGranPremios(): number{
        let totalGP : number = 0;
        for (let i = 0; i <this.granPrixGanados1.length; i ++) totalGP +=1
        for (let i = 0; i <this.granPrixGanados2.length; i ++) totalGP +=1
        
        return totalGP

    }


}