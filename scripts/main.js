import { data } from './data.js';
var driversTable = document.getElementById("drivers");
var driverDetailsDiv = document.getElementById("driverDetails");
mostrarDrivers();
function mostrarDrivers() {
    var driversTbody = document.createElement("tbody"); // Crea un tbody para agregar a la tabla
    driversTable.appendChild(driversTbody); // Agrega el tbody a la tabla
    var _loop_1 = function (driver) {
        var trElement = document.createElement("tr");
        // Celda para el nombre con un enlace clickeable
        var nameCell = document.createElement("td");
        var nameLink = document.createElement("a");
        nameLink.textContent = driver.nombre;
        nameLink.href = "#"; // Añadir href="#" para comportamiento estándar de enlace
        nameLink.onclick = function () {
            showDriverDetails(driver);
            return false; // Previene que el enlace navegue a otra página
        };
        nameCell.appendChild(nameLink);
        // Crear y añadir las otras celdas
        trElement.innerHTML += "<td>".concat(driver.anioNacimiento, "</td>\n                                <td>").concat(driver.granPrixGanados, "</td>\n                                <td>").concat(driver.campeonatosGanados, "</td>\n                                <td>").concat(driver.polePositions, "</td>");
        trElement.prepend(nameCell); // Añade la celda del nombre al principio del trElement
        driversTbody.appendChild(trElement); // Añade el trElement al tbody, no a la tabla directamente
    };
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var driver = data_1[_i];
        _loop_1(driver);
    }
}
function showDriverDetails(driver) {
    driverDetailsDiv.innerHTML = "\n    <div class=\"card\">\n        <img src=\"".concat(driver.foto, "\" class=\"card-img-top\" alt=\"Imagen de ").concat(driver.nombre, "\">\n        <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(driver.nombre, "</h5>\n            <p class=\"card-text\">").concat(driver.descripcion, "</p>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\">A\u00F1o de Nacimiento: ").concat(driver.anioNacimiento, "</li>\n                <li class=\"list-group-item\">Gran Prix Ganados: ").concat(driver.granPrixGanados, "</li>\n                <li class=\"list-group-item\">Campeonatos Ganados: ").concat(driver.campeonatosGanados, "</li>\n                <li class=\"list-group-item\">Pole Positions: ").concat(driver.polePositions, "</li>\n            </ul>\n        </div>\n    </div>");
}
