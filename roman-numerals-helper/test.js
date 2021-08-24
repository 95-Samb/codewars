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

    it("returns V for 5", () => {
      assert.equal(subject.toRoman(5),"V");
    })

    it("returns VI for 6", () => {
      assert.equal(subject.toRoman(6),"VI");
    })

    it("returns XI for 11", () => {
      assert.equal(subject.toRoman(11),"XI");
    })
  })
})
