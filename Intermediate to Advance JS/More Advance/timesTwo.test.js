const timesTwo = require('./timesTwo');
test('return multiply of two times', ()=>{
    expect(timesTwo(10)).toBe(20);
});