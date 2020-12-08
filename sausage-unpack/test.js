var assert = require('assert')
const sausageUnpacker = require("./sausage_unpacker")

describe('Unpacking', () => {
  subject = sausageUnpacker.sausageUnpacker
  it('returns blank when given blank', () => {
    assert.equal(subject(""), "")
  })


})
