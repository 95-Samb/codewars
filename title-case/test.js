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

  it("returns Be Cat Not Dog for be cat not dog", () => {
    assert.equal(subject.titleCase("be cat not dog"),"Be Cat Not Dog")
  })

  it("returns Be Cat not Dog for be cat not dog and not exempted", () => {
    assert.equal(subject.titleCase("be cat not dog","not"),"Be Cat not Dog")
  })

  it("returns Be a Cat not Dog for be a cat not dog and not,a exempted", () => {
    assert.equal(subject.titleCase("be a cat not dog","a not"),"Be a Cat not Dog")
  })

  it("returns Be of Cat not O dog for be of cat not O dog and not,a exempted", () => {
    assert.equal(subject.titleCase("be of cat not o dog","of not"),"Be of Cat not O Dog")
  })

  it("returns Be of Cat not O dog for be of cat not O dog and not,a,be exempted", () => {
    assert.equal(subject.titleCase("be of cat not o dog","of not be"),"Be of Cat not O Dog")
  })

  it("returns The Wind in the Willows for THE WIND IN THE WILLOWS and The In exempted", () => {
    assert.equal(subject.titleCase("THE WIND IN THE WILLOWS","The In"),"The Wind in the Willows")
  })
})
