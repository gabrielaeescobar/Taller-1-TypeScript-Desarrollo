import { data } from './data.js';
var driverContent = document.getElementById("driver");
var gpsContent = document.getElementById("granPremios");
var legadoContent = document.getElementById("legado");
var gpLista = document.getElementById("gpLista");
var gpLista2 = document.getElementById("gpLista2");
mostrarDatosDriver(data[0]);
mostrarGPsTotales(data[0]);
mostrarListaGP(data[0]);
//mostrarDatosDriver(data[1]);
//mostrarGPsTotales(data[1]);
//mostrarListaGP(data[1]);
function mostrarDatosDriver(driver) {
    var titleDriver = document.createElement("h1");
    titleDriver.style.textAlign = "center";
    titleDriver.innerHTML = "".concat(driver.nombre);
    var bodyDriver = document.createElement("div");
    bodyDriver.innerHTML = "\n    <div style=\"display: flex; justify-content: space-around;\">\n        <div style=\"width: 50%;\">\n            <p class=\"text-break text-justify\">".concat(driver.descripcion, "</p>\n        </div>\n    <img src=\"").concat(driver.imagenPrincipal, "\" class=\"img-fluid rounded\" style=\"max-width: 50%;\">\n    </div>\n\n    <h1>Rivalidad con ").concat(driver.pilotoRivalidad, "</h1>\n    <div style=\"display: flex; justify-content: space-around;\">\n    <img src=\"").concat(driver.fotoRivalidad, "\" class=\"img-fluid rounded\" style=\"max-width: 50%;\">\n    <div style=\"width: 50%;\">\n        <p class=\"text-break text-justify\">").concat(driver.descripcionRivalidad, "</p>\n    </div>\n    </div>");
    var bodyLegado = document.createElement("div");
    bodyLegado.innerHTML = "\n        <h1>Legado</h1>\n        <div style=\"display: flex; justify-content: space-around;\">\n        <img src=\"".concat(driver.fotoLegado, "\" class=\"img-fluid rounded\" style=\"max-width: 50%;\">\n        <div style=\"width: 50%;\">\n        <h3>").concat(driver.legadoTitulo1, "</h3>\n            <p class=\"text-break text-justify\">").concat(driver.legadoDescripcion1, "</p>\n        <h3>").concat(driver.legadoTitulo2, "</h3>\n            <p class=\"text-break text-justify\">").concat(driver.legadoDescripcion2, "</p>\n        </div>\n        </div>");
    driverContent.appendChild(titleDriver);
    driverContent.appendChild(bodyDriver);
    legadoContent.appendChild(bodyLegado);
}
function mostrarGPsTotales(driver) {
    var totalGp = driver.darCantidadGranPremios();
    var divElement = document.createElement("div");
    divElement.innerHTML = "\n    <h1 class=\"text-left\">Grandes Premios</h1>\n    <div style=\"display: flex; justify-content: space-around;\">\n    <img src=\"".concat(driver.fotoGranPrix, "\" class=\"img-fluid rounded\" style=\"max-width: 50%;\">\n    </div>\n    <h3 class=\"text-left\">").concat(driver.nombre, " gano ").concat(totalGp, " grand prix</h3>\n\n    ");
    gpsContent.appendChild(divElement);
}
function mostrarListaGP(driver) {
    var gpListaBody = document.createElement("ul");
    for (var _i = 0, _a = driver.granPrixGanados1; _i < _a.length; _i++) {
        var granPrixGanado = _a[_i];
        var liElement = document.createElement("li");
        liElement.innerHTML = "".concat(granPrixGanado);
        gpListaBody.appendChild(liElement);
    }
    var gpListaBody2 = document.createElement("ul");
    for (var _b = 0, _c = driver.granPrixGanados2; _b < _c.length; _b++) {
        var granPrixGanado = _c[_b];
        var liElement = document.createElement("li");
        liElement.innerHTML = "".concat(granPrixGanado);
        gpListaBody2.appendChild(liElement);
    }
    gpLista.appendChild(gpListaBody);
    gpLista2.appendChild(gpListaBody2);
}
