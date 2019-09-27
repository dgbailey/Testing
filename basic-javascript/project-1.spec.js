const helpers = require('./project-1');

// start testing!//toBe is ===,  Object.is() is strict equality except for how it treats NAN and +0/-0 not == no type coercion, referential equality for objects, toEqual deep comparison, toContain, not toHaveLength
//toEqual recursively checks every field of an object or array.
/*=== is called strict comparison operator in JavaScript. Object.is and strict comparison operator behave exactly the same except for NaN and +0/-0.*/

//to Equal checks the deep equality, recursively passing through the properties, === strict or abstract == is never true comparing different object instances
//new keyword binds this to an empty object. most likely by calling c fn in the new object context.



//arrange ,act, assert
describe('project1',() =>{
    describe('multiplyByTen',() =>{
        it('multiplies a number by 10 and returns result',()=>{
            expect(helpers.multiplyByTen(4)).toBe(40);
            expect(helpers.multiplyByTen(Math.max)).toBeNaN();
        })
    });
});

describe('project1',() =>{
    describe('subtractFive', ()=>{
        it('subtracts 5 from a number',()=>{
            expect(helpers.subtractFive(4)).toBeTruthy()
        });
        it('subtracts 5 from a number',()=>{
            expect(helpers.subtractFive(Math.max)).toBeNaN()
        });
    });
});

describe('project1', () =>{
    describe('areSameLength',()=>{
        it('checks string length equality', () =>{
            expect(helpers.areSameLength('test','be')).toBeFalsy()
        });
    });
});
//assemble act assert
describe('project1',()=>{
    describe('areEqual',() =>{
        it('checks strict equality of parameters. Will fail if parameters are NOT stictly equal',()=>{

                const ob1 = {'a':1};
                const ob2 = {'a':1};
                expect(helpers.areEqual(ob1,ob2)).not.toBeTruthy();
           

            
            
        })
        
    });
});

describe('project1',()=>{
    describe('greaterThanFifty',() =>{
        it('Passes if param is int GT 50. Fails: Param  LT LTE 50',()=>{
          
            const integer = Infinity
            expect(helpers.greaterThanFifty(integer)).toBeTruthy()
            
        });
        it('Passes if param is int GT 50. Fails: Param is not INT',()=>{
            const nonInt = '';
           
            expect(helpers.greaterThanFifty(nonInt)).toBe(false)
            expect(helpers.greaterThanFifty(nonInt)).toBeFalsy()
            
        });
    });
});

//what is the unit under test
//what should it do 
//what was the expected output
//how do you reproduce the failure (given)(should)