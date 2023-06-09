const { addFive, multiply, concatinate } = require("./addFive");

test("return the number plus 2", () => {
  expect(addFive(2)).toBe(7); // Passed 
});

test("return 2 * 3 is 6", () => {
  expect(multiply(2, 3)).toBe(6); // Passed 
});

test('to concatinate strings only', ()=>{
    expect(concatinate(2, 3)).toBe("23"); //Failed
});
