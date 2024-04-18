import {data} from './data.js';
import {Driver} from './driver.js';

let driverContent: HTMLElement=document.getElementById("driver")!;
let gpsContent: HTMLElement=document.getElementById("granPremios")!;
let legadoContent: HTMLElement=document.getElementById("legado")!;
let gpLista: HTMLElement= document.getElementById("gpLista")!;
let gpLista2: HTMLElement= document.getElementById("gpLista2")!;

mostrarDatosDriver(data[0]);
mostrarGPsTotales(data[0]);
mostrarListaGP(data[0]);

//mostrarDatosDriver(data[1]);
//mostrarGPsTotales(data[1]);
//mostrarListaGP(data[1]);


function mostrarDatosDriver(driver: Driver): void{
    let titleDriver = document.createElement("h1");
    titleDriver.style.textAlign = "center";
    titleDriver.innerHTML = `${driver.nombre}`;
    
    let bodyDriver = document.createElement("div");
    bodyDriver.innerHTML=`
    <div style="display: flex; justify-content: space-around;">
        <div style="width: 50%;">
            <p class="text-break text-justify">${driver.descripcion}</p>
        </div>
    <img src="${driver.imagenPrincipal}" class="img-fluid rounded" style="max-width: 50%;">
    </div>

    <h1>Rivalidad con ${driver.pilotoRivalidad}</h1>
    <div style="display: flex; justify-content: space-around;">
    <img src="${driver.fotoRivalidad}" class="img-fluid rounded" style="max-width: 50%;">
    <div style="width: 50%;">
        <p class="text-break text-justify">${driver.descripcionRivalidad}</p>
    </div>
    </div>`;


    let bodyLegado = document.createElement("div");
    bodyLegado.innerHTML = `
        <h1>Legado</h1>
        <div style="display: flex; justify-content: space-around;">
        <img src="${driver.fotoLegado}" class="img-fluid rounded" style="max-width: 50%;">
        <div style="width: 50%;">
        <h3>${driver.legadoTitulo1}</h3>
            <p class="text-break text-justify">${driver.legadoDescripcion1}</p>
        <h3>${driver.legadoTitulo2}</h3>
            <p class="text-break text-justify">${driver.legadoDescripcion2}</p>
        </div>
        </div>`;


    driverContent.appendChild(titleDriver);
    driverContent.appendChild(bodyDriver);
    legadoContent.appendChild(bodyLegado);
}

function mostrarGPsTotales(driver : Driver): void{
    let totalGp: number = driver.darCantidadGranPremios();
    
    let divElement: HTMLElement = document.createElement("div");
    divElement.innerHTML=`
    <h1 class="text-left">Grandes Premios</h1>
    <div style="display: flex; justify-content: space-around;">
    <img src="${driver.fotoGranPrix}" class="img-fluid rounded" style="max-width: 50%;">
    </div>
    <h3 class="text-left">${driver.nombre} gano ${totalGp} grand prix</h3>

    `;
    gpsContent.appendChild(divElement);
}


function mostrarListaGP(driver: Driver): void {
    let gpListaBody: HTMLElement = document.createElement("ul");
    for (let granPrixGanado of driver.granPrixGanados1) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `${granPrixGanado}`;
        gpListaBody.appendChild(liElement);
    }

    let gpListaBody2: HTMLElement = document.createElement("ul");
    for (let granPrixGanado of driver.granPrixGanados2) {
        let liElement = document.createElement("li");
        liElement.innerHTML = `${granPrixGanado}`;
        gpListaBody2.appendChild(liElement);
    }
    gpLista.appendChild(gpListaBody);
    gpLista2.appendChild(gpListaBody2);
}



