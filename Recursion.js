/*

Recursion has a lot of advantages in comparision to interation of enumeration algorithms.

Advantages: Fewer Lines of Code and datastrucutres

Disadvantages: High Memory Usage and sloer run-time

Every recursion solution can be converted to data stack solution

Recursion is mostly applied for interative branching, such as Binary Search, transversin and other data structures.


Recursion are usefull when you have to invoke a function several times with computed parameter.

Recursive Functions works like a stack.

*/
 
function printFun(test)
    {
        if (test < 1)
            return;
        else {
            console.log(test + " ");
            printFun(test - 1); // statement 2
            console.log(test + " ");
            return;
        }
    }


 /* Stack
 
 printgun(3) - printgun(2) - printfun(1) - printgun(o) - return printfun(1) line 27, printfun(2), line 27, printfunt(3) line 27

 To stop a recursion a base case ( a conditiom before the recursion involation) becomes true.
 
// Driver code
    let test = 3;
    printFun(test); // 3  2  1  1  2  3 


*/


function p (n) {

let x = 0


    if(n > 40) {

        console.log(n);
        p(n-1);
        x += 1;
        console.log(n+1)
        return x;

    } else { return n  }


}

console.log(p(80))



function p (n) {

    let x = 5
    
    
        if(n > 40) {
    
            
            return p(n-1); // executes and returns the value retuned from the execution.
            
    
        } else {return n}
    
    
    }
    
    console.log(p(80))  // 40

    // executions auntil the base case returns the value from the base case that quited the recursion.





