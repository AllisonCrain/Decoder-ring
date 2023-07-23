// Write your tests here!
const { expect } = require("chai");
const {caesar}= require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift is 0", () => {
        const actual = caesar("message", 0);
        const expected = false;
        expect (actual).to.equal(expected);
    });
    it("should return false if shift is greater than 25", () => {
        const actual = caesar("message", 30);
        const expected = false;
        expect (actual).to.equal(expected);
    });
    it("should return false if shift is less than -25", () => {
        const actual = caesar("message", -50);
        const expected = false;
        expect (actual).to.equal(expected);
    });
    it("should return false if shift is not present", () => {
        const actual = caesar("message");
        const expected = false;
        expect (actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const actual = caesar("HELLO", 2);
        const expected = "jgnnq";
        expect (actual).to.eql(expected);
    });
    it("should return decoded message by given shift value", ()=> {
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"; 
        expect(actual).to.eql(expected);
    });
    it("should return encoded message by given shift value", () => {
        const actual = caesar("This is a secret message!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!";
        expect(actual).to.eql(expected);
    });
    it("should leave spaces and special characters as entered when encoding", () => {
        const actual = caesar("abc !", 8);
        const expected = "!"
        expect(actual.charAt(4)).to.equal(expected);
    });
    it("should leave spaces as is", () => {
        const actual = caesar("abc !", 8);
        const expected = " "
        expect(actual.charAt(3)).to.equal(expected);
    });
    it("should wrap around the alphabet if a letter is shifted off", () => {
        const actual = caesar("Zelda", 3);
        const expected = "chogd";
        expect(actual).to.equal(expected);
    });
});
