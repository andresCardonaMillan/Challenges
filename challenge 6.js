class Persona{
    constructor(nombre, edad, suCiudad){
        this.nombre = nombre;
        this.edad = edad;
        this.Ciudad = suCiudad;
    }
}

class Ciudad {
    constructor(nombre){
        this.nombre = nombre;
    }
}

class Grafo {
    constructor(){
        this.node = [];
        this.adjList = {};
    }

    agregarPersona (persona){
        this.node.push(persona);
        if (!(persona.Ciudad.nombre in this.adjList)) {
            this.adjList[persona.Ciudad.nombre] = [persona];
        } else {
            this.adjList[persona.Ciudad.nombre].push(persona);
        }

    }

    agregarCiudad(ciudad){
        this.node.push(ciudad);
        this.adjList[ciudad.nombre] = []
    }

    printAdjacency(nombreCiudad){
        if (nombreCiudad in this.adjList){
            console.log(`Residentes de ${nombreCiudad}:`);
            this.adjList[nombreCiudad].forEach(persona => {
                console.log(`${persona.nombre} tiene ${persona.edad} años`);
            });
        } else {
            console.log(`No se encontraron residentes para ${nombreCiudad}`);
        }
    }
}

const grafo = new Grafo();

const cali = new Ciudad("Cali");
const medellin = new Ciudad("Medellin");
const bogota = new Ciudad("Bogota");

const juan = new Persona("Juan", 25, cali);
const maria = new Persona("María", 30, medellin);
const carlos = new Persona("Carlos", 40, bogota);
const murillo = new Persona("Murillo", 18, cali);
const andres = new Persona("Andres", 19, cali);

grafo.agregarPersona(juan);
grafo.agregarPersona(maria);
grafo.agregarPersona(carlos);
grafo.agregarPersona(murillo);
grafo.agregarPersona(andres);

grafo.printAdjacency("Cali");