var assert = require('assert')
const subject = require("./duplicate_count")

describe("#duplicateCount", () => {

  it("returns 0 for an empty string", () => {
    assert.equal(subject.duplicateCount(""),0)
  })

  it("returns 1 for aa", () => {
    assert.equal(subject.duplicateCount("aa"),1)
  })

  it("returns 0 for a", () => {
    assert.equal(subject.duplicateCount("a"),0)
  })

  it("returns 0 for ab", () => {
    assert.equal(subject.duplicateCount("ab"),0)
  })

  it("returns 1 for aba", () => {
    assert.equal(subject.duplicateCount("aba"),1)
  })


})
