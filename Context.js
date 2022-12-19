/* Context 


Phases:

1 - Creation:  Variables declaration with undefinedd values. Functions are put on memory.

Hoisting with hoist the declaration but not the initialization. 

    1.1 Variables */
    console.log(p) // Reference Error "new hosting"

    let p = "hoisted"



   // 1.2 Functions Declarations 

   z() // Hoisted. No Reference Error -, as it is declared with a functions statement
   
   function z () {
       return console.log("hoisted")
   }


   d() //  Reference Error. Variable was hoisted but no initialized because the function is a value.

   d = function() {
       return console.log("not hoisted")
   }


 /* 


 2 - Scopes: Is the context of execution which values and expressions are visible and can be rederenced.
Functions creates a special scope, the closure. 
