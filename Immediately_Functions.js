
/* Immediately Invoked Functions 

They are executed once they are defined.
They ame merely function expressions and are not hoisted 
If you pass the IFC as value to a variable - it will be as usual only an expression - the variable will be hoisted, but the expression will not.
Excelent if you wnt to preserve variables in script,that will not match with global scope.
It seems really unfrequent to declare variables in the global scope
*/ 

    let counter = 0


    ; (function () { // 
        console.log(counter++); // 0 - Would use the increment operator before the identifier  if you wanted to decrase.
        return function p () { return counter}; // 1
    
    } () ) // can assign the nested function to be returned at the same time of the declaration, as it will be immediately invoked. 

    console.log(counter) // 1 - No invokating but counter was incremented 


    ; let imedite = ( function () {
        counter++;
        return function p () {return counter++}
    }())

    console.log(counter) // 2 - Even if the IIF is a vallue, it will be executed once it is defined. 

    // The difference is that you can reinvoke using the variable identifier. 

    let imediteii = (function (){
        let counter = 0;
        return function () { return counter++;}
        } 
    () ) ;

console.log(counter) // 2 - The closure is preserved
console.log(counter)
console.log(imediteii()) // 0 - The closure is preserved
console.log(imediteii()) // 1 


