class Book {
    constructor(nombre, isbn, autor, editorial){
        this.nombre = nombre;
        this.isbn = isbn;
        this.autor = autor;
        this.editorial = editorial;
    }
}

class Stack{
    constructor(){
        this.stack = [];
        this.count = 0;
    }

    push(book){
        this.stack.push(book);
        this.count ++;
    }

    pop(){
        if (this.count== 0 ){
            return null; //si la fila esta vacia retorna nulo
        }
        const bookDelete = this.stack.pop();
        this.count--;
        return bookDelete;
    }

    peek(){
        if(this.count==0){
            return null;
        }
        return this.stack[this.count - 1];
    }

    size(){
        return this.count;
    }

    print(){
        console.log(this.stack);
    }
}

const stack = new Stack();

//creacion de libros
const libro1 = new Book("El señor de los anillos", "978-0544003415", "J.R.R. Tolkien", "Minotauro");
const libro2 = new Book("Cien años de soledad", "978-6073120850", "Gabriel García Márquez", "Diana");
const libro3 = new Book("Harry Potter y la piedra filosofal", "978-8478884452", "J.K. Rowling", "Salamandra");

stack.push(libro1);
stack.push(libro2);
stack.push(libro3);

console.log(stack.peek());
console.log(stack.pop());
stack.print();