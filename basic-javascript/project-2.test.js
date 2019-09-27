const funcs = require('./project-2');



// start testing!//toBe is ===,  Object.is() is strict equality except for how it treats NAN and +0/-0 not == no type coercion, referential equality for objects, toEqual deep comparison, toContain, not toHaveLength
//toEqual recursively checks every field of an object or array.
//If both operands are objects, then JavaScript compares internal references 
/*=== is called strict comparison operator in JavaScript. Object.is and strict comparison operator behave exactly the same except for NaN and +0/-0.*/

//to Equal checks the deep equality, recursively passing through the properties, === strict or abstract == is never true comparing different object instances



// whoops.. there is no test suite for this file. You'll simply just have to create one :/





describe('project2',() => {
    describe('greeting',() =>{
        const expected = 'Guten Tag!';
        const input = 'German';
        it(`It should return ${expected} with input: ${input}`,() =>{
            expect(funcs.greeting(input)).toMatch(expected)
            expect(funcs.greeting(input)).toEqual(expected)
        });
        
            
          
           
      
    });
    describe('greeting: default',() =>{
        const expected = 'Hello!';
        const input = 'B';
        it(`It should return expected: <default> with input: ${input}`,() =>{
        
                expect(funcs.greeting(input)).toEqual(expected)
    })})
});

describe('project2', () =>{
    describe('returnFirst: Empty array',() =>{
        const expected =  undefined;
        const input = [];
        it(`returns expected: ${expected} \nwhen input: ${input}`,() =>{
            expect(funcs.returnFirst(input)).toEqual(expected);
        });
    });
});

describe('project2', () =>{
    describe('addItemToArray', () =>{
        const expected = [1,2];
        const inputA = 2;
        const inputB = [1]
        it(`Adds input: ${inputA} --to-- ${inputB} --expecting-- ${expected}`,()=>{
            expect(funcs.addItemToArray(inputB,inputA)).toContain(2);
            //toEqual will recursively evaluate the arrays (deep)
            //toBe will identity match objects of the same type (false)
            //toContain
        });
          
    });
})

//what is the unit under test
//what should it do 
//what was the expected output
//how do you reproduce the failure (given)(should)