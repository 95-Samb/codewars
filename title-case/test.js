var assert = require("assert")

const subject = require("./title_case")

describe("#titleCase", () => {

  it("returns B for b", () => {
    assert.equal(subject.titleCase("b"),"B")
  })

  it("returns empty string for empty string", () => {
    assert.equal(subject.titleCase(""),"")
  })

  it("returns Be for be", () => {
    assert.equal(subject.titleCase("be"),"Be")
  })

  it("returns Be for Be", () => {
    assert.equal(subject.titleCase("Be"),"Be")
  })
})
