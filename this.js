/* THIS

This is keyword used in function and object context
Its usages changes in strict and non strict context.

Generally, THIS referes to the object a function is being called.

- Global Context

In node, this is the global object {}

console.log(global) // Returns all built-in node objects
console.log(this) // Returns module.export, an object containing eventually imported modules.


*/


this.x = 4

o ={
    x  : 40,
    metodos: function() {
        return this.x
    }
}

globals = x.metodos

globals()











/*

- 1 Function Context

In function definition, it will return the global object  */ 

function show() {
    console.log(this === window); // true
 }
 
 console.log(show()); // Module.export Object


 // In use strict it would catch an undefined for THIS

 function show() {
    "use strict";
    console.log(this); // true

    function display() {
        console.log(this); // true
    }
    display();
}

show(); // undefined undefined

/*

        1.1 Method Invocation 

        Inside a method, this referes to the parenting object.
        If you pass a method containing this to a different variable, the reference of this will be undefined.
        One can overcome this problem with Bind()
        bind() is method inherited from the function.prototype.


*/

    // Two Objects

    table = {
    size : 4,
    metos : function () {
        return this.size + 1
            }

    }

    let table2 = table.metos

    console.log(table2()) // NaN

    table2 = table.metos.bind(table) // Pass the method mantaining the method passed bound to the original lexical reference.

    console.log(table2()) // 5 




    /// Three Objects 

    car = {
    size: 5,
    metos: function () {
        return this.size * 4
    }
}

pices = {
    size : "4"
}


let car2 = car.metos.bind(pices) // I sets this to the Bike Object, and this from Car Object passed as value bound to bike to Car2

console.log(car2()) // 16


    
   // - 1.2 Constructor Invocation



function Car (size) {
    this.size = 4
    this.price= 200
}

// Passing methods to the prototype

Car.prototype.sxp = function () {
    return this.size * this.price 
}

car4 = new Car(4)

console.log(car4.sxp()) // 800 - Inherited Methods, Parameters and Properties. 

// Although (this) within the constructor function referes to Global



    // 1.3 -  Nested Functions in object method

obo = new Object

obo.frase = " Manuel nasceu em Casteicao, Guarda, Portugal"
obo.index =   function () {
    p = this.frase.split(" ");
    return p.findIndex( x => x === "Portugal")
} ;

console.log(obo.index()) // 6




    // This in a method closure

        obo = new Object

        obo.frase = " Manuel nasceu em Casteicao, Guarda, Portugal"
        obo.index =   function () {
            p = this.frase.split(" ") ; // Error
                function p () {
            return this.p.findIndex( x => x === "Portugal")
                     } 
        } ;

        console.log(obo.index()) // Undefined - This in a nested function expressuin does not inherit the reference.

        /* https://www.w3schools.com/js/js_this.asp


    1.4 - Arrow Functions (Best Example)

        They have lexical scope, inheriting the scope from the parenting one.
        This occurs clearly in nested functions as a method of an object.
        
        
        1.4.1  A nested arrow function within the method */

    function Car () { // An Object Constructor Function
    this.size = 4
    this.price= 200
}

        // Passing methods to the prototype with a nested arrow function (closure)

        Car.prototype.sxp = function () {
        let currency =  this.size * 4;
        p = () => { return this.size * this.price * currency };
        return p()
    }

        car4 = new Car()

        console.log(car4.sxp()) // 12.000 - The Arrow function inherit the lexical scope of the parentig function, binding this to the object. 
                        //Also as a closure acess variables from the outer function scope where they were declared not invoked.
                        // If the p function woul have been declared with function keyword - the closure would remain - but the inheritance of the THIS not. 

        // 1.4.2 - A nested function declared with Function, using THIS to refer to the object

        function Trot(pop, inner) {
            this.pop = pop
            let inner = inner
        }       
     
    
    
        Trot.prototype.metos = function () {
            function z() {
            return console.log(this.inner * this.pop) // NaN - Error - Only a nested arrow function would inherit THIS as reference to the parenting object Trot.
            }   
            return z ()
        }
    
    
    trot1 = new Trot(4,5)
    trot1.metos() // Error - Only a nested arrow function would inherit THIS as reference to the parenting object.
    // As discussed earlier, arrow functions inherit the this value of the function that contains them, but functions defined with the function keyword do not
    // An Arrow function declared as method would, alhthoug, not contain the THIS reference as the exempla above, as it will INHERTI THIS AS A GLOBAL OBJECT.
    


        // 1.4.2 - Arrow Functions as methods


    let size = 10

    function Bike () {
        this.size = 4
    }       
 
    Bike.prototype.sxp = () => this.size
 
 
    bike2 = new Bike
 
    console.log(bike2.sxp()) // Undefined - Arrow functions can not be methods. 

        // 1.4.3 - Function returning a nested function to variable without explicit prototype


        function Trot(pop) {
            function inn (inner) {
                return console.log(inner * pop)
            }   
            return inn // The function is defined and returned
        }       
     
      let trot2 = Trot(4) // trot2 receives the inn as a function expression.
    
        trot2(3) // 12


