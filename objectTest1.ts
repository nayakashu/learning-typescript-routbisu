class Greeter {
    GreetingType: string;
    Greet() {
        console.log(this.GreetingType + ' ' + 'World!');
    }
}

class ChildGreeter extends Greeter {
    Greet() {
        console.log("Hello Child!");
    }
}

var parentGreeter = new Greeter();
parentGreeter.GreetingType = 'Holla';
parentGreeter.Greet();