var assert = require('assert')
const script = require("./sausage_unpacker")

describe('Unpacking a box', () => {
  let subject = script.sausageUnpacker
  describe('For a single product', () => {
    it('returns blank when given blank', () => {
      assert.deepEqual(subject(""), "")
    })
    it('returns l when given l', () => {
      assert.deepEqual(subject(["[l]"]), ["l"])
    })
    it('returns 1 when given 1', () => {
      assert.deepEqual(subject(["[1]"]), ["1"])
    })
    it('returns blank when given lx', () => {
      assert.deepEqual(subject(["[lx]"]), [])
    })
    it('returns 11 when given 11', () => {
      assert.deepEqual(subject(["[11]"]), ["11"])
    })
    it('returns blank when given 111 in no packaging', () => {
      assert.deepEqual(subject(["111"]), [])
    })
  })
  describe('For two products', () => {
    it('returns l when given [l],notSausage', () => {
      assert.deepEqual(subject(["[l]","notSausage"]), ["l"])
    })
    it('returns l1 when given [l],[1]', () => {
      assert.deepEqual(subject(["[l]","[1]"]), ["l","1"])
    })
    it('returns blank when given x,y', () => {
      assert.deepEqual(subject(["x","y"]), [])
    })
  })
  describe('For three or more products', () => {
    it('returns l when given [l],notSausage,alsoNotSausage', () => {
      assert.deepEqual(subject(["[l]","notSausage","alsoNotSausage"]), ["l"])
    })
    it('returns @l when given [@],notSausage,[l]', () => {
      assert.deepEqual(subject(["[@]","notSausage","[l]"]), ["@","l"])
    })
  })
})

xdescribe('Unpacking a truck', () => {
  let subject = script.truckUnpacker

  describe('For a single box', () => {
    it('returns 1 when given [1]', () => {
      assert.equal(subject([["[1]"]]), "1")
    })

    it('returns 1@@l when given [[1],[@@],[l]]', () => {
      assert.equal(subject([["[1]","[@@]","[l]"]]), "1 @ @ l")
    })
  })

  describe('For two boxes', () => {

    it('returns 1@ when given [[1]],[[@]]', () => {
      assert.equal(subject([["[1]"],["[@]"]]), "1 @")
    })

    it('returns 1l@ when given [[1],[l]],[[cheese],[@]]', () => {
      assert.equal(subject([["[1]","[l]"],["[cheese]","[@]"]]), "1 l @")
    })


  })

  describe('For three or more boxes', () => {

    it('returns 1@ when given [[1]],[[@]],[[@]]', () => {
      assert.equal(subject([["[1]"],["[@]"],["[@]"]]), "1 @ @")
    })

    it('returns 1@@1 when given [[1]],[[@]],[[@]],[[1]]', () => {
      assert.equal(subject([["[1]"],["[@]"],["[@]"],["[1]"]]), "1 @ @ 1")
    })

    it('returns 1@ when given [[1]],[[@]],[@],[[beans]]', () => {
      assert.equal(subject([["[1]"],["[@]"],["@"],["[beans]"]]), "1 @")
    })

    let test = [["[1]","[@]","@"],["[beans]"],["[l]","chocolate",""]];

    it('returns 1@l when given ${test}', () => {
      assert.equal(subject(test), "1 @ l")
    })

    let second_test = [["[1]"],["[1]"],["[1]"],["[1]"],["[1]"]];

    it('returns 1111 when given ${second_test}', () => {
      assert.equal(subject(second_test), "1 1 1 1")
    })


  })

})

