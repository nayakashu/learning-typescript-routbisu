class Greeter {
    Greet() {
        console.log("Hello Parent!");
    }
}

class ChildGreeter extends Greeter {
    Greet() {
        console.log("Hello Child!");
    }
}

var greeter = new ChildGreeter();
greeter.Greet();