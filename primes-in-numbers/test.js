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

  describe("for small numbers", () => {

    it("returns 2**2 for 4", () => {
      assert.equal(subject.primeInNumbers(4),"(2**2)")
    })

    it("returns 2**7 for 128", () => {
      assert.equal(subject.primeInNumbers(128),"(2**7)")
    })


  })



})

describe("finding all prime factors",() => {

  it("returns 2,2 for 4", () => {
    assert.deepEqual(subject.primeFactors(4),[2,2])
  })

  it("returns 2,2,2,2,2,2,2 for 128", () => {
    assert.deepEqual(subject.primeFactors(128),[2,2,2,2,2,2,2])
  })

  it("returns 2,3,17 for 102", () => {
    assert.deepEqual(subject.primeFactors(102),[2,3,17])
  })

})
