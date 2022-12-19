
this.x = 4 ;

o ={
    x  : 40,
    metodos: function() {
        return (this.x)
    },
    metodosarrow : () => { 
        console.log(this.x);
        p = () => {
            return this.x // parent scope this = global, as arrow function inherits this to parenting the scope
        }
        return p()
    } 
}



console.log(o.metodos()) // 40

console.log(o.metodosarrow()) // 4 e 4

global = o.metodosarrow

console.log(global()) // 4 

global = o.metodos

console.log(global()) // undefined - this is still referig to the original method scope. must use bind or call a constructot




o = {
    x  : 40,
    metodos: function() {
        return (this.x)
    },
    metodosarrow : function () { 
        console.log(this.x);
        p = () => {
            return this.x  // parent scope this = object, as function keyword binds this to the scope
        }
        return p()
    } 
}

console.log(o.metodos()) // 40

console.log(o.metodosarrow()) // 40 e 40

global = o.metodosarrow

console.log(global()) // Undefined

global = o.metodos

console.log(global()) // Undfiend



// Arrow Functions inherits THIS from the function that contain its, or from the parent scope genrally (parent scope inheritance)
// Functions Keyword define THIS binding to the scope they were declared (local or global object), but never inherits THIS from a function scope or any other parenting scope. (local scope binding)


p = {x : 400}

// p = o.metodos



z = o.metodos.bind(p)

console.log(o.metodos.call(p))

console.log(z) // 400












// this being dynamically bound, (bding defined at call time and runtime only)
// Variables from closure being lexically bound



function outer() {
    var inner = 4;
  
    function innerFunc() {
      var inner = 5;
      console.log('inner called with ' + this.inner);
    }
    return innerFunc();
  }
  var obj = outer()
  console.log.apply(obj)





  console.log(z()) // 4000
  console.log(o.metodos.call(p)) // 400

  console.log(z)