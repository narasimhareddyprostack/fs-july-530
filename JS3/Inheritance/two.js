class Parent {
    constructor() {
        console.log("Parent Class Construtor")
    }
}
class Child extends Parent {
    constructor() {
        super();
        console.log("Child Class Constructor")
    }
}
new Child();