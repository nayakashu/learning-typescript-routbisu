class Greeter {
    private GreetingType: number;
    
    constructor(greetingType) {
        console.log(typeof(greetingType));
        this.GreetingType = greetingType;
        console.log(typeof(this.GreetingType));
    }

    Greet() {
        console.log(this.GreetingType + ' ' + 'World!');
    }
}

class ChildGreeter extends Greeter {
    private Name: string;

    constructor(name) {
        super('Hello');
        this.Name = name;
    }

    Greet() {
        console.log("Hello Child!");
    }
}

var childGreeter = new Greeter('Hello');
childGreeter.Greet();