import { Driver } from "./driver.js";

export const drivers = [
    new Driver(
        "Ayrton Senna",
        1960,
        "https://i.pinimg.com/564x/04/84/7e/04847e0104af19d9bfa38a3dce185634.jpg",
        41,
        3,
        65,
        "Ayrton Senna fue uno de los pilotos más talentosos y carismáticos en la historia de la Fórmula 1. Condujo para equipos como McLaren y Lotus, y ganó tres campeonatos mundiales antes de su trágica muerte en 1994."
    ),
    new Driver(
        "Michael Schumacher",
        1969,
        "https://i.pinimg.com/564x/72/ab/9f/72ab9f515048ff0c29ee61f25075800a.jpg",
        91,
        7,
        68,
        "Michael Schumacher es considerado uno de los mejores pilotos de Fórmula 1 de todos los tiempos. Ganó siete campeonatos mundiales y estableció numerosos récords durante su carrera. Su legado perdura en la historia del automovilismo."
    ),
    new Driver(
        "Niki Lauda",
        1949,
        "https://i.pinimg.com/564x/2b/b9/91/2bb991a9f761a4dae4d00981cdf2262a.jpg",
        25,
        3,
        24,
        "Niki Lauda fue un piloto austriaco legendario, conocido por su determinación y valentía. Ganó tres campeonatos mundiales y es recordado por su increíble regreso después de su grave accidente en el Nürburgring en 1976."
    ),
    new Driver(
        "Juan Manuel Fangio",
        1911,
        "https://i.pinimg.com/564x/16/3d/e1/163de12759033cad6d2a19b73e65a2fa.jpg",
        24,
        5,
        29,
        "Juan Manuel Fangio es uno de los pilotos más exitosos en la historia de la Fórmula 1. Ganó cinco campeonatos mundiales en la década de 1950 y es ampliamente considerado como uno de los mejores pilotos de todos los tiempos."
    ),
    new Driver(
        "Alberto Ascari",
        1918,
        "https://i.pinimg.com/564x/3b/04/08/3b04089d7eb08776639168378eb12082.jpg",
        13,
        2,
        14,
        "Alberto Ascari fue un piloto italiano que dominó la Fórmula 1 en la década de 1950. Ganó dos campeonatos mundiales consecutivos y estableció varios récords durante su carrera, antes de su trágica muerte en un accidente en 1955."
    ),
    new Driver(
        "Lewis Hamilton",
        1985,
        "https://i.pinimg.com/564x/9d/01/3a/9d013a68aa7f2797a584f0f79fc8cd32.jpg",
        103, 
        7,
        104,
        "Lewis Hamilton es uno de los pilotos más exitosos de la era moderna de la Fórmula 1. Ha ganado múltiples campeonatos mundiales y establecido numerosos récords en la categoría. Su habilidad y dedicación lo han convertido en una leyenda del deporte."
    )

];

export const data = drivers.map(driver => new Driver(driver.nombre, driver.anioNacimiento, driver.foto, driver.granPrixGanados,driver.campeonatosGanados, driver.polePositions, driver.descripcion))

