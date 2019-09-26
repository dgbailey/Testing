const helpers = require('./project-1');

// start testing!//toBe, toEqual, toContain, not toHaveLength
//toEqual recursively checks every field of an object or array.

//arrange ,act, assert
describe('project1',() =>{
    describe('multiplyByTen',() =>{
        it('multiplies a number by 10 and returns result',()=>{
            expect(helpers.multiplyByTen(4)).toBe(40);
            expect(helpers.multiplyByTen(Math.max)).toBeNaN();
        })
    });
});

describe('project -1',() =>{
    describe('subtractFive', ()=>{
        it('subtracts 5 from a number',()=>{
            expect(helpers.subtractFive(4)).toBeTruthy()
        });
        it('subtracts 5 from a number',()=>{
            expect(helpers.subtractFive(Math.max)).toBeNaN()
        });
    });
});

describe('project-1', () =>{
    describe('areSameLength',()=>{
        it('checks string length equality', () =>{
            expect(helpers.areSameLength('test','be')).toBeFalsy()
        });
    });
});