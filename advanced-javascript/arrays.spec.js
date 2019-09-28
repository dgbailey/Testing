const arrayFunctions = require('./arrays');
// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

//remeber setup and teardowns BeforeAll() AfterAll() to keep things DRY? or a factory pattern with functions

//review
//unit tests are fast, isolated, specific,
// describe('Arrays', () => {
//   describe('map', () => {
//     it('should be a function', () => {
//       const map = arrayFunctions.map;
//       expect(typeof map).toBe('function');
//     });
//   });
// });

describe('Arrays',()=>{
  let testArr;
  //before Each seems to run before each 'it' statement. Declaring variables outside of the it lexical scope
  //will be undefined 
  beforeEach(() =>{
    testArr = [1,2,3,4]
  })

  describe('tests reduce with no starting value',() =>{
    const cb = (a,b) => a + b;
    
    it('should use first value of testArr as starting value',()=>{
      const expected = testArr.reduce((acc,y) => acc + y);
      expect(arrayFunctions.reduce(testArr,cb)).toBe(expected);
    });
  });

  describe('tests reduce WITH starting value',() =>{
    const cb = (a,b) => a + b;
    const startingValue = 10;
    it('resulting sum should be greater than sum of only array elements',()=>{
      const expected = testArr.reduce((acc,y) => acc + y);
      expect(arrayFunctions.reduce(testArr,cb,startingValue)).toBeGreaterThan(expected);
    });
  });

  describe('tests reduce WITH starting value as string',() =>{
    const cb = (a,b) => a + b;
   
    const startingValue = '10';
    it('result should be type string',()=>{
      const expected = 'string';
      expect(typeof(arrayFunctions.reduce(testArr,cb,startingValue))).toBe(expected);
    });
  });
});

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
