var assert = require("assert")

const subject = require("./roman_numerals")

describe("RomanNumerals", () => {

  describe("#toRoman", () => {

    it("returns I for 1", () => {
      assert.equal(subject.toRoman(1),"I");
    })

    it("returns II for 2", () => {
      assert.equal(subject.toRoman(2),"II");
    })

    it("returns IV for 4", () => {
      assert.equal(subject.toRoman(4),"IV");
    })

    it("returns V for 5", () => {
      assert.equal(subject.toRoman(5),"V");
    })

    it("returns VI for 6", () => {
      assert.equal(subject.toRoman(6),"VI");
    })

    it("returns XI for 11", () => {
      assert.equal(subject.toRoman(11),"XI");
    })

    it("returns XL for 40", () => {
      assert.equal(subject.toRoman(40),"XL");
    })

    it("returns XX for 20", () => {
      assert.equal(subject.toRoman(20),"XX");
    })

    it("returns XV for 15", () => {
      assert.equal(subject.toRoman(15),"XV");
    })

    it("returns MDCLXVI for 1666", () => {
      assert.equal(subject.toRoman(1666),"MDCLXVI");
    })

    it("returns MLI for 1051", () => {
      assert.equal(subject.toRoman(1051),"MLI");
    })
  })

  describe("#fromRoman", () => {

    it("returns 1 for I", () => {
      assert.equal(subject.fromRoman("I"),1)
    })

    it("returns 5 for V", () => {
      assert.equal(subject.fromRoman("V"),5)
    })
  })
})
