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
   })



})
