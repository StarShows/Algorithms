
// A short example of a js self envoking function

// ES6

const a = 2;

( IIFE = () => {
    
    const a = 3;
    console.log(a);
    
    
})();

console.log(a);


// ES5

var a = 2;

( function IIFE(){
    
    var a = 3;
    console.log(a);
    
    
})();

console.log(a);

