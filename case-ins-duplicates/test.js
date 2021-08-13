var assert = require('assert')
const subject = require("./duplicate_count")

describe("#duplicateCount", () => {

  it("returns 0 for an empty string", () => {
    assert.equal(subject.duplicateCount(""),0)
  })
})
