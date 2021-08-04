var assert = require('assert')
const subject = require("./prime_in_numbers")

describe("Finding prime decomposition", () =>{

   describe("for prime numbers", () => {

    it("returns null for 1", () => {
      assert.equal(subject.primeInNumbers(1),null)
    })

    it("returns null for 0", () => {
      assert.equal(subject.primeInNumbers(0),null)
    })

    it("returns 2 for 2", () => {
      assert.equal(subject.primeInNumbers(2),"(2)")
    })

    it("returns 5 for 5", () => {
      assert.equal(subject.primeInNumbers(5),"(5)")
    })
   })



})
