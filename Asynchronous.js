/* Introduction


- Mozila : The Promise Object : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

Promises objects represents the completition or failure of a asynchronou operation and its resulting value.

Promises are objects that you attach a callback function, instead of passing the callback as function argument. */





function successCallback(result) {
  console.log(`Audio file ready at URL: ${result}`);
}

function failureCallback(error) {
  console.error(`Error generating audio file: ${error}`);
}

createAudioFileAsync(audioSettings).then(successCallback, failureCallback)

/* The guarantees of  callback function.


    Callbacks added with loops will never be run before the completition of current js evento loop.
    It is possible to chain the callback functions with several thens and therefore, setting up a Promise Chain.


A promise chain with arrow functions and then syntax */


getJson()

.then( value => {
    console.log("resolved")})
    
.then (value => {
    console.log("resolved") })

.then(value => { 
    console.log("fulfilled")}) 

.catch(error) {
    console.log(`This was ${error}`)}

/* 

A promise chain with arrow functions and await syntax */


async function foo(data) {

    try {
    const result = await getJSON(data);
    const doSomething = await doing(result);
    const doElse = await doElse(doSomething);

    } catch(error) { 

        console.log(error.stack)

    }

    return doElse
}





// The Nesting Technique:

doSomethingCritical()
  .then((result) =>
    doSomethingOptional(result)
      .then((optionalResult) => doSomethingExtraNice(optionalResult))
      .catch((e) => {}) // Catch statement has acces only of error thrown by the first then function scope, therefore erros thrown from doSomethingoptional, doSomethingExtranice. It can grasp error from doSomething Critical
  ) // Ignore if optional stuff fails; proceed.
  .then(() => moreCriticalStuff())
  .catch((e) => console.error(`Critical failure: ${e.message}`));

/* The Arrow function shortcuit syntax
A Promise when fulfilled ou reject must return a value, other wise the subsequent callback will receive an undefined input.
In arrow functions, if the function block has only one expression, the resulting value of the expression is the returning value of the function.
If We use curly braces, the returning value is not explicit anymore. 

Example:

.catch((e) => console.log(e)) returns logged e
.catch((e) => {console.log(e)}) returns undefined



  /* The Promise Object Constructor Function


  Syntax */

  new Promise(executor)


  /* the executor is a bult-in function that has two parameters: resolutionFunc and rejectionFunc */

  new Promise(resolutionFunc,rejectionFunc)

/* The Promise is informed by the asynchronous code result bu the callbacks passes as arguments of the constructor. 


Example */



const readFilePromise = (path) => new Promise((resolve, reject) => {
    readFile(path, (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result); // returns result as the promise expected object.
      }
    });
  });
  
  readFilePromise("./data.txt")
    .then((result) => console.log(result))
    .catch((error) => console.error("Failed to read data"));



    /*

- Flanagan: 



Javascript based serves tipically await for request to arrive over the network before doing anything.
Three importan js features frames the asynchrnous character of the languange

    Promises : Objects that represent not yet available results of asynchrinous operations
    Asynchrnous interators and for/wait loop to work with streams of asyncrnous evetns using loops that appear synchronous.




    1. Callbacks
    A function you define and pass as an argument to another function.
    The other function invokes the parameter function, calling it back.


        1.1 Timers

        setTimeout(checkForUpdates, 60000); /7 Check forupdates is callback function called after 60000 milliseconds

        1.2 Callbacks ad Events in Node

        Node.js server is ddeply asynchrnous.
        The default API f Node to read the contents of a file invokes a callback function when the contents of the file have been read. */

          fs.readFile() - /* It takes two parameter callback as its last argument. It reads the file asynchronously and then invokes the callback.
          The callback have two arguments, the first is an hypotetical error, and the second is the file contents theirself */

          fs.readFile("config.json", "utf-8", (err, text) => {
                if (err) {
                    console.warn("Could not read config file:", err);
            } else {
                Object.assign(options, JSON.parse(text));

            }
            // In either case, we can now start running the program
                startProgram(options);
                 })

/*

        2. Promisse
        
        PROMISE : a Promise is an OBJECT that represents the result of an asynchronous operation.” It is important to remember that Promises are not just abstract
        ways registering callbacks to run when some async code finishes—they represent the results of that async code.

        An OBJECT is a promise if there is callback functions passed as arguments of a THEN method appended to the PROMISE OBJECT:
        The ASYNCHRONOUS CODE return the PROMISE OBJECT it self
 

        A promise is an object result of asynchronous computation. 
        Once can only aske the Promise to call a callbackfunction when the value is ready.
        Linear promisse chain are better to read than nested indented lines of callback functions.
        Asyncrnous programming with callback functions breaks exception handling.
        Promises represents the future results of single asynchronous computation.
        Although promises can replcace setTimeout(), setInterval can not be replaced.

                 2.1 Using Promises */

                getJSON(url).then(jsonData => {}); // jsondata is the promise callbacked once the asynchronous computation has ended returning the 

                /* getJSON starts a synchrnous HTTP request, while that request is pending, it returns a promise object.
                The promise object defines then instance method then()
                Once the http arrives, the body of the response is parsed in JSON and passes to the function that we passed to then.
                THEN is a method as CALLBACK REGISTRATION.
                Idiomatically, we should append then directly to the function invocation thar RETURNS THE PROMISE, without the need
                to asing te Promise Object to a variable. 
                It is idiomatic to name asynchronous functions with verbs
                Another advantage of using promise chains rather nestedcalbback functions are the errorhandling.
                If an asynchrnous functions throws an exception, there is no way to propagate this back to the initiator. 
               



    
        2.1 Using Promises 

        Erro Handingl.
        The second argument of a .then method can be a function invoked  if the promised threw an exception.
        If not exception is thrown, the promise receives the value or promised object from the asynchronous computation. The promise for non-execption context is the first argument of .then
        Remebering, when in a synchrnous computation throws an exception, it iwill propagate up the stack until there is a catch cluas to handle. 
        When an asynchronou computation rus, the caller is no longer in the stack. Therefore, it is not possible to thorw the exception to the caller.
        But the then method of the promised object passes the error to the second argument. */


        getJSON("/api/user/profile").then(displayUserProfile,handleProfileError) // getJSON returns a promised object to the promise defined with then method that contains two callback functions as arguments.


        getJSON("/api/user/profile").then(displayUserProfile).catch(handleProfileError) 
        
       /* More idiomatic. If the callback displayUserprofile receives a promise error from getJSON or throw it during execution, the handleprofile will dea with the error despite they were previosuly thrown.


                 2.1.2 Terminology

                 the then is method of a PROMISE Object.
                 The then method has two callback functions as arguments.
                 If the promise was FULFILLED, the first callback is called. Therefore the promise was FULFILLED.
                 If the promise was REJECTED, the first callback is called.
                 If none of the callbacks were called, the promise is PENDING.
                 A promise also can be solved.

        2.2 Chaining Promises

        In older versions of js, XMLHttpRequest object was used to make an HTTP request in JS.
        Now ther is the promise .based FECTH API. 
        The HTTP API is the function fetch()
        The argument of this function is the URL, and returning value is the promise object. */

        fetch("/api/user/profile") // Initiates a HTTP GET request for a URL and return a promise I (body of URL)
            .then(response => {
                return response.json(); // the promised I is passed to the callback function that parses the promise I sa json object and return it ,a promise II. (response.json is a asynchronous code)
            })
            .then(profile => {
                displayUserProfile(profile); // json is the promise II and is passed to the callback function, returning the promise object III.
            });


/*

        2.2.3 Resolving Promises.


        Recapping the last example, actually there is a fourth object involved.
        The return value of the callback I is not the JSON object but a Promise 4 fo that JSON object.
        The author points out that the task 2 begins invoking the callback function C1 and taks 2 does not end when c1 returns. 
        

        The then method returns a PROMISE, and after that it executes the callback code returning a value v.
        Once V is returned P is fulfilled with the value v, before that P was only resolved with V.
        ONCE the promised is resolved with a value that is not itself a PROMISE, the PROMISE is FULFILLED
        RESOLVING a PROMISE MEANS: the PROMISE was associated or locked onto another PROMISE, and it will be fulfilled or rejected depending of the returnin value of the nested promise. */


                function c1(response) { // callback 1
                
                    let p4 = response.json();
                    return p4; // returns promise 4
                }
                function c2(profile) { // callback 2
                    displayUserProfile(profile);
                }
                
                let p1 = fetch("/api/user/profile"); // promise 1, task 1
                let p2 = p1.then(c1); // promise 2, task 2 - return promise 4 settling(fullfilling) and resolving promise 2
                let p3 = p2.then(c2); // promise 3, task 3


        /* Every time you register a callback function inside a then method, js throws a Promise Object.
        Therefore, there are three promises in our late code, registered for  Fetch(), c1 and c2.
        Throughout the execution, c1 returns a value a new Promise. This promise does not resolve C1, and C1 remains nor fulfilled and becomes associated to C2, whose input is P4.
        C1 will await untill the end of the chain, when the returned value of the callback is the promise itself.
        

        2.2.4 Promises based on other Promises */

        function getJSON(url) {
            return fetch(url).then(response => response.json());
            }

        // The promise returned by getJSON resolves the promise returned by response.json()
        // When response.json fullfils, getJSON fulfils too with the same value.


/*      2.2.5 Promises based on Synchronous Values

        For that we use statics methods. 

        Promise.resolve()
        Promise.reject()
        Promise()

        The fist take a single argument and returns a Promise that will be rejected or fulfilled.
        
        In the example of 2.2.4 we took a function that returns 


        2.2..6 Promises from scratch

        In the example of 2.2.4 we took a function that returns a promise, as they are in-built asynchronous static methods.

        We can, though, writting from the scrath a function returning a promise value, using Promise() constructor.

        The syntax for ths constructor accepts only one parameter, a function with two arguments named resolve and reject.

        Resolve and Reject are also static methods and are called back to resolve the promise. Thefero, resolve and reject controls the returning promise.


        */
        function wait(duration) {

            return new Promise((resolve, reject) => { // These control the Promise

                // If the argument is invalid, reject the Promise
                if (duration < 0) {

                    reject(new Error("Time travel not yet implemented"));

                }

                // Otherwise, wait asynchronously and then resolvethe Promise.
                // setTimeout will invoke resolve() with no arguments, which means
                // that the Promise will fulfill with the undefined value.
                setTimeout(resolve, duration);
                });
                }


        

/*
        2.4  async and await expressions 

        Those two keywords simplified the use of Pomises and allow us to write promise-based asynchronous code. 
        Those keywords make Promise-based code to hide the Promises, aking it very symple to read.



        2.4.1 Await Expressions


        We dont use await with a variable that holds a Promise, instead, we use it before the INVOKATION of a function that returns a promise. */

        let response = await fetch("/api/user/profile") ; 
        let profile = await response.json()


        /* The asynchronous code does not make your pogramm to block. 


        2.4.2 The async functions

        You can only use await keyword with functions that have been declared with async keyword. 
        What js compiler understand when we use async keyword ? It means that the return value is a promise, even if no promise-based
        code appears in the body of the function.*/

        async function getHighScore() {
            let response = await fetch("/api/user/profile");
            let profile = await response.json();
            return profile.highScore;
        } // The function it self registers a promise, and the code executed inside it register and return another promise from fetch aynchrnous execution.

/*

        One the asynchrnous function was declared, we can use it as callback fuction using the await keyword. */

        displayHighScore(await getHighScore()); // The calling function must be asynchronous too. // The calling function was decalred with async or it is implicitly asynchrnous.

/*      If the calling function is nor asynchronous, onde must code in this way */


        getHighScore().then(displayHighScore).catch(console.error) /*


        Implementation Details 
        Literal Syntax for an asynchrnous function

        */

        function f(x) {
            return new Promise(function(resolve, reject) { // Defines a returning promise. The resolve function will return the result of its argument to fulfill the promise
                try {
                    resolve((function(x) { /* body */ })(x));
                }
                catch(e) {
                    reject(e); // If an error is caught, the promise will be rejected.
                }
            });
        }


/* the await keyword in terms of syntax braks the the function body into separte synchronous chunks.
The await keyword can be used in any form o function declaration or expresssion, even methods and arow functions. 



        Awaiting multiple-promises */

        async function getJSON(url) {

            let response = await fetch(url);
            let body = await response.json();
            return body;
        }
/*

        Avoiding unecessary sequentiality */

        let value1 = await getJSON(url1);
        let value2 = await getJSON(url2);

        // Instead:

        let [value1, value2] = await Promise.all([getJSON(url1),  getJSON(url2)]); // Concurrently Async Functions executions

/* 
        The await keyword breaks the function body into separe synchronous chuncks



/*
       2.5 The for/await Loop

       Node mkes is readable stream synchronously interable. 
       One can read a sucessive chunck of data from a stream with form/ await loop



/* The for/ wait Loop


