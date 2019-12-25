
// A short example of a js self envoking function

// ES6

const a = 2;

( IIFE = ( global ) => {
    
    const a = 3;
    console.log(a);
    console.log(global.a);
    
    
})( window );

console.log(a);
