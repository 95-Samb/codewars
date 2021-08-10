var assert = require('assert')
const subject = require("./count_smileys")


describe("finding amount of smileys", () =>{

  it("returns 0 for []", () => {
    assert.equal(subject.countSmileys([]),0)
  })

  it("returns 1 for [:)]", () => {
    assert.equal(subject.countSmileys([':)']),1)
  })
})
