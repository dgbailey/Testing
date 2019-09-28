const objectFunctions = require('./objects');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/
// describe('objects', () => {
//   it('should be an object', () => {});
// });


//learned today, typeof
//JS types primitive, object
//undefined vs null
//declare vs defined
//setup teardown
//.closeTo
//arrow functions do have lexical scope
//strict vs loose equality vs Object.is()
//toBe(), vs toEqual(), vs toContainEqual(), vs toMatchObject,
//jest globals
//yarn test --verbose
//dependencies forjest in create-react-app vs not

//Async operations with done() and with 
//Jest will wait for promises to resolve before continuing test
//A promise is an object which can be returned synchronously from an asynchronous function.

//async await 
//look up promose chaining
//.catch ()will run if any previous promises reject


//JEST will wait for returned promises to resolve before finishing a test
//you can also use async await

/*Contrary to what it seems, await does not block. 
It's just syntactic sugar over promises. Nothing is blocked; 
it may look blocking to allow code to be synchronous, but that's 
just sugar over promises. For example, this may look synchronous:*/

// const response = await fetch(…);
// const json = await response.json();
// const foo = JSON.parse(json); // Using json here, even though my request was async!


// //desugared 
// fetch(…)
//   .then(response => response.json())
//   .then(json => {
//     const foo = JSON.parse(json);
//   });