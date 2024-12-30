const unroll = require("./unroll");

describe("#unroll", function () {

  it("is a function", function () {
    expect(typeof unroll).toEqual("function");
  });

  // Start at top 4 left to right (1, 2, 3, 4), go down (8, 12, 16), go left (15, 14, 13), up (9, 5), right (6, 7), down (11), left (10)
  it("handles unroll test in intended array order", function() {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    const finalSquare = [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10];

    expect(unroll(square)).toEqual(finalSquare);
  });

  it("smaller size test - handles odd number", function() {
    const triangle = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];

    const finalTriangle = ["a", "b", "c", "f", "i", "h", "g", "d", "e"];

    expect(unroll(triangle)).toEqual(finalTriangle);
  });

  it("handles 1 input array", function() {
    const oneShape = [
      ['shape']
    ];
    expect(unroll(oneShape)).toEqual(["shape"]);
  });

});
