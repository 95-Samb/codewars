var assert = require('assert')
const script = require("./sausage_unpacker")

describe('Unpacking a box', () => {
  subject = script.sausageUnpacker
  describe('For a single product', () => {
    it('returns blank when given blank', () => {
      assert.equal(subject(""), "")
    })
    it('returns l when given l', () => {
      assert.equal(subject(["[l]"]), "l")
    })
    it('returns 1 when given 1', () => {
      assert.equal(subject(["[1]"]), "1")
    })
    it('returns blank when given lx', () => {
      assert.equal(subject(["[lx]"]), "")
    })
    it('returns 11 when given 11', () => {
      assert.equal(subject(["[11]"]), "11")
    })
    it('returns blank when given 111 in no packaging', () => {
      assert.equal(subject(["111"]), "")
    })
  })
  describe('For two products', () => {
    it('returns l when given [l],notSausage', () => {
      assert.equal(subject(["[l]","notSausage"]), "l")
    })
    it('returns l1 when given [l],[1]', () => {
      assert.equal(subject(["[l]","[1]"]), "l1")
    })
    it('returns blank when given x,y', () => {
      assert.equal(subject(["x","y"]), "")
    })
  })
  describe('For three or more products', () => {
    it('returns l when given [l],notSausage,alsoNotSausage', () => {
      assert.equal(subject(["[l]","notSausage","alsoNotSausage"]), "l")
    })
    it('returns @l when given [@],notSausage,[l]', () => {
      assert.equal(subject(["[@]","notSausage","[l]"]), "@l")
    })
  })
})
