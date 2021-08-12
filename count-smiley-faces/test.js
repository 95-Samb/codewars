var assert = require('assert')
const subject = require("./count_smileys")


describe("finding amount of smileys", () =>{

  it("returns 0 for []", () => {
    assert.equal(subject.countSmileys([]),0)
  })

  it("returns 1 for [:)]", () => {
    assert.equal(subject.countSmileys([':)']),1)
  })

  it("returns 0 for [:(]", () => {
    assert.equal(subject.countSmileys([':(']),0)
  })

  it("returns 1 for [:D]", () => {
    assert.equal(subject.countSmileys([':D']),1)
  })

  it("returns 1 for [;D]", () => {
    assert.equal(subject.countSmileys([';D']),1)
  })

  it("returns 0 for [;gD]", () => {
    assert.equal(subject.countSmileys([';gD']),0)
  })

  it("returns 0 for [;:]", () => {
    assert.equal(subject.countSmileys([';:']),0)
  })

  it("returns 1 for [;-----D]", () => {
    assert.equal(subject.countSmileys([';-----D']),0)
  })

  it("returns 3 for [;D,:),:-),:O,;P]", () => {
    assert.equal(subject.countSmileys([";D",":)",":-)",":O",";P"]),3)
  })

  it("returns 0 for [':o)', ':--D', ';-~)']", () => {
    assert.equal(subject.countSmileys([':o)', ':--D', ';-~)']),0)
  })



})
