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

  it("returns Be Cat for be cat", () => {
    assert.equal(subject.titleCase("be cat"),"Be Cat")
  })

  it("returns Be Cat for be cat not dog", () => {
    assert.equal(subject.titleCase("be cat not dog"),"Be Cat Not Dog")
  })

  it("returns Be Cat for be cat not dog and not exempted", () => {
    assert.equal(subject.titleCase("be cat not dog","not"),"Be Cat not Dog")
  })
})
