class Persona {
    constructor(nombre, cumpleaños){
        this.nombre = nombre;
        this.cumpleaños = cumpleaños;
    }
}

class Node {
    constructor(persona){
        this.persona = persona;
        this.children = [];
    }

    isLeaf(){
            if (this.children.length === 0){
                return true;
            } else {
                return false;
            }
        }
    }

class ArbolGenealogico {
    constructor(){
        this.root = null;
    }

    search(nombre, node = this.root){
        if (!this.root){
            return null;
        }

        if(node.persona.nombre === nombre){
            return node;
        } else {
            const children = node.children;
            const inChildren = children.find(item => item.persona.nombre === nombre);
            if (inChildren) {
                return inChildren;
            } else {
                for (const child of children) {
                    const foundNode = this.search(nombre, child);
                    if (foundNode) {
                        return foundNode;
                    }
                }
                return null;
            }
        }
    }
    
    insert(persona, parent) {
        const newNode = new Node(persona);

        if (!parent){
            if(!this.root){
                this.root = newNode;
            } else {
                return null
            }
        } else {
            const parentNode = this.search(parent.nombre);
            if (parentNode) {
                parentNode.children.push(newNode);
            } else {
                //console.log("Error: El padre especificado no se encontró en el árbol.");
                return null;
            }
        }
    }


    preOrder(node = this.root){
        if (!node) {
            return;
        }

        console.log(node.persona.nombre, node.persona.cumpleaños);

        node.children.forEach(element => {
            this.preOrder(element);
        });
    }

    postOrder(node = this.root){
        if(!node){
            return;
        }

        node.children.forEach(element => {
            this.postOrder(element);
        });
        console.log(node.persona.nombre, node.persona.cumpleaños);
    }

    inOrder(node = this.root){
        if (!node){
            return;
        }
        if (node.children.length === 0) {
            console.log(node.persona.nombre, node.persona.cumpleaños);
        } else {
            this.inOrder(node.children[0])
            console.log(node.persona.nombre, node.persona.cumpleaños);

            for( let i = 1; i < node.children.length; i++ ){
                this.inOrder(node.children[i]);
            }
        }
    }
}


const arbol = new ArbolGenealogico();
const abuela = new Persona("María García", "01/01/1950");
const abuelo = new Persona("Juan Pérez", "01/01/1950");
const padre = new Persona("Luis Pérez García", "01/01/1975");
const madre = new Persona("Ana Gómez Sánchez", "01/01/1980");
const hijo1 = new Persona("Carlos Pérez Gómez", "01/01/2000");
const hijo2 = new Persona("Laura Pérez Gómez", "01/01/2005");
const hijo3 = new Persona("David Pérez Gómez", "01/01/2010");

arbol.insert(abuela, null);
arbol.insert(abuelo, null);
arbol.insert(padre, abuela);
arbol.insert(madre, abuelo); 
arbol.insert(hijo1, padre); 
arbol.insert(hijo2, padre); 
arbol.insert(hijo3, padre); 

console.log("----- Preorden -----");
arbol.preOrder();

console.log("\n----- Postorden -----");
arbol.postOrder();

console.log("\n----- En Orden -----");
arbol.inOrder();
