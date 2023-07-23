// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
   it("should encode a message by translating each letter to each pair of numbers", () => {
     const actual = polybius("thinkful"); 
     const expected = "4432423352125413";
    expect(actual).to.eql(expected);
   });
  
  it("should leave the spaces as is when encoding", () => {
     const actual = polybius("hello world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });

it("should ignore capital letters", () => {
     const actual = polybius("HELLO world"); 
     const expected = "3251131343 2543241341";
    expect(actual).to.eql(expected);
  });
  
  it("should decode a message by translating each pair of numbers into a letter", () => {
    const actual = polybius('23513434112251', false);
    const expected = "message";
        expect(actual).to.equal(expected);
  });
  
  it("should leave the spaces as is when decoding", () => {
     const actual = polybius("3251131343 2543241341", false); 
     const expected = "hello world";
    expect(actual).to.eql(expected);
  });

  it("should translate 42 to i/j when decoding", () => {
     const actual = polybius("4432423352125413", false); 
     const expected = "th(i/j)nkful";
    expect(actual).to.eql(expected);
  });

  it("should translate i and j to 42 when encoding", () => {
     const actual = polybius("jiggle"); 
     const expected = "424222221351";
    expect(actual).to.eql(expected);
  });
  
  it("should return false if the number of characters in the string sans spaces is not even", () => {
    const actual = polybius("44324233521254134", false);
    expect(actual).to.be.false;
  });
});