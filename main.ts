import { data } from './data.js';
import { Driver } from './driver.js';

let driversTable: HTMLElement = document.getElementById("drivers")!;
let driverDetailsDiv: HTMLElement = document.getElementById("driverDetails")!;

mostrarDrivers();

function mostrarDrivers(): void {
    let driversTbody = document.createElement("tbody"); 
    driversTable.appendChild(driversTbody);

    for (let driver of data) {
        let trElement = document.createElement("tr");

        let nameCell = document.createElement("td");
        let nameLink = document.createElement("a");
        nameLink.textContent = driver.nombre;
        nameLink.href = "#"; 
        nameLink.onclick = () => {
            showDriverDetails(driver);
            return false; 
        };
        nameCell.appendChild(nameLink);

        trElement.innerHTML += `<td>${driver.anioNacimiento}</td>
                                <td>${driver.granPrixGanados}</td>
                                <td>${driver.campeonatosGanados}</td>
                                <td>${driver.polePositions}</td>`;
        trElement.prepend(nameCell); 
        driversTbody.appendChild(trElement); 
    }
}

function showDriverDetails(driver: Driver): void {
    driverDetailsDiv.innerHTML = `
    <div class="card">
        <img src="${driver.foto}" class="card-img-top" alt="Imagen de ${driver.nombre}">
        <div class="card-body">
            <h5 class="card-title">${driver.nombre}</h5>
            <p class="card-text">${driver.descripcion}</p>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Año de Nacimiento: ${driver.anioNacimiento}</li>
                <li class="list-group-item">Gran Prix Ganados: ${driver.granPrixGanados}</li>
                <li class="list-group-item">Campeonatos Ganados: ${driver.campeonatosGanados}</li>
                <li class="list-group-item">Pole Positions: ${driver.polePositions}</li>
            </ul>
        </div>
    </div>`;
}