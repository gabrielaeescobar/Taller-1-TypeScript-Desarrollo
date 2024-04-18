var Driver = /** @class */ (function () {
    function Driver(nombre, descripcion, imagenPrincipal, pilotoRivalidad, descripcionRivalidad, fotoRivalidad, granPrixGanados1, granPrixGanados2, fotoGranPrix, legadoTitulo1, legadoDescripcion1, legadoTitulo2, legadoDescripcion2, fotoLegado) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagenPrincipal = imagenPrincipal;
        this.pilotoRivalidad = pilotoRivalidad;
        this.descripcionRivalidad = descripcionRivalidad;
        this.fotoRivalidad = fotoRivalidad;
        this.granPrixGanados1 = granPrixGanados1;
        this.granPrixGanados2 = granPrixGanados2;
        this.fotoGranPrix = fotoGranPrix;
        this.legadoTitulo1 = legadoTitulo1;
        this.legadoDescripcion1 = legadoDescripcion1;
        this.legadoTitulo2 = legadoTitulo2;
        this.legadoDescripcion2 = legadoDescripcion2;
        this.fotoLegado = fotoLegado;
    }
    Driver.prototype.darCantidadGranPremios = function () {
        var totalGP = 0;
        for (var i = 0; i < this.granPrixGanados1.length; i++)
            totalGP += 1;
        for (var i = 0; i < this.granPrixGanados2.length; i++)
            totalGP += 1;
        return totalGP;
    };
    return Driver;
}());
export { Driver };
