var assert = require('assert')
const sausageUnpacker = require("./sausage_unpacker")

describe('Unpacking', () => {
  subject = sausageUnpacker.sausageUnpacker
  describe('For a single box', () => {
    it('returns blank when given blank', () => {
      assert.equal(subject(""), "")
    })
    it('returns l when given l', () => {
      assert.equal(subject([["[l]"]]), "l")
    })
    it('returns 1 when given 1', () => {
      assert.equal(subject([["[1]"]]), "1")
    })
    it('returns blank when given lx', () => {
      assert.equal(subject([["[lx]"]]), "")
    })
    it('returns 11 when given 11', () => {
      assert.equal(subject([["[11]"]]), "11")
    })
    it('returns blank when given 111 in no packaging', () => {
      assert.equal(subject([["111"]]), "")
    })
  })
  describe('For two boxes', () => {
    it('returns l when given [l],notSausage', () => {
      assert.equal(subject([["[l]","notSausage"]]), "l")
    })
  })
})
