const myName: string = 'Cristian';
const myAge: number = 12;

const suma = (a: number, b: number): number => {
    return a + b;
}

suma(12, 23);

class Persona {

    constructor(private age: number, private name: string) {}

    getSummary() {
        return `My name is ${this.name}, and I'm  ${this.age}`;
    }
}

const nicolas = new Persona(15, 'nicolas');
nicolas.getSummary();
