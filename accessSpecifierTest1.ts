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
    Greet() {
        console.log("Hello Child!");
    }
}

var parentGreeter = new Greeter('Hello');
parentGreeter.Greet();