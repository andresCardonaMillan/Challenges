class People {
    constructor(name, time){
        this.name = name;
        this.time = time;
    }
}

class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue (persona){
        this.queue.push(persona);
        return this.queue;
    } 

    dequeue(){
        return this.queue.shift();
    }

    peek(){
        return this.queue[0];
    }

    size(){
        return this.queue.length;
    }

    isEmpty(){
        return this.queue.length == 0;
    }

    print(){
        const peopleInfo = this.queue.map(people => `${people.name} (${people.time})`);
        console.log("Fila:");
        console.log(peopleInfo.join(','));
    }
}

const queue = new Queue();
const persona1 = new People("Andres Cardona","6:00");
const persona2 = new People("Ingrid Millan","7:00");
const persona3 = new People("Maximiliano Millan","8:00")
queue.enqueue(persona1);
queue.enqueue(persona2);
queue.enqueue(persona3);
console.log("Tamaño de la fila:", queue.size());
console.log("Persona atendida",queue.dequeue());
console.log("Siguinete persona en la fila",queue.peek());
console.log("¿la fila esta vacia?",queue.isEmpty());
queue.print();