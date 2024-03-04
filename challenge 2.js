class task { //clase tarea
    constructor(titulo, descripcion, punto){
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.punto = punto;
    }
}

class node { //nodo, cada nodo tiene un objeto tarea
    constructor(task, next = null){
        this.task  = task;
        this.next = next;
    }   
}

class Todos { 
    constructor(){
        this.head = null;
        this.tail = null;
    }

    append(task) {
        const newTask = new node(task);
        if (!this.head) {
            this.head = newTask;
        } else {
            this.tail.next = newTask;
        }
        this.tail = newTask;
    }
    
    print(){
        let current = this.head;
        while (current != null) {
            console.log(`Titulo ${current.task.titulo} | Descripcion ${current.task.descripcion} | Punto ${current.task.punto} | Next ${current.next ? current.next.task.titulo : null}`);
            current = current.next;
        }
    }
}

// Crear una lista de TODO y llenarla con algunas tareas
const listaTodo = new Todos();
listaTodo.append(new task("Hacer compras", "Comprar leche y huevos.", 5));
listaTodo.append(new task("Estudiar para el examen", "Repasar los temas de matemáticas.", 10));
listaTodo.append(new task("Hacer ejercicio", "Correr durante 30 minutos.", 8));

// Imprime la lista
console.log("Lista de TODO:");
listaTodo.print();