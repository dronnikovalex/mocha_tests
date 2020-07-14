describe("pow", () => {

  describe("возводит x в степень 3", () => {

    let makeTest = (x) => {
      let expected = x * x * x;
      it (`${x} в степени 3 равно ${expected}`, () => assert.equal(pow(x, 3), expected));
    }
    
    for (let x = 0; x < 5; x++) {
      makeTest(x);
    }

  });

  describe("возводит x в степень 4", () => {

    let makeTest = (x) => {
      let expected = x * x * x * x;
      it (`${x} в степени 4 равно ${expected}`, () => assert.equal(pow(x, 4), expected));
    }
    
    for (let x = 0; x < 5; x++) {
      makeTest(x);
    }

  });

  it("для отрицательных n возвращает NaN", () => assert.isNaN(pow(2, -1)));

  it("для дробных n возвращает NaN", () => assert.isNaN(pow(2, 1.5)));

});