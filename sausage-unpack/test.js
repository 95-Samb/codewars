var assert = require('assert')
const sausageUnpacker = require("./sausage_unpacker")

describe('Unpacking', () => {
  subject = sausageUnpacker.sausageUnpacker
  it('returns blank when given blank', () => {
    assert.equal(subject(""), "")
  })
  it('returns l when given l', () => {
    assert.equal(subject([["[l]"]]), "l")
  })
  it('returns blank when given lx', () => {
    assert.equal(subject([["[lx]"]]), "")
  })


})
