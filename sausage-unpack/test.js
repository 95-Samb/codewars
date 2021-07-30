var assert = require('assert')
const script = require("./sausage_unpacker")

describe('Unpacking a box', () => {
  let subject = script.sausageUnpacker
  describe('For a single product', () => {
    it('returns blank when given blank', () => {
      assert.deepEqual(subject(""), "")
    })
    it('returns blank when given l', () => {
      assert.deepEqual(subject(["[l]"]), [])
    })
    it('returns blank when given lx', () => {
      assert.deepEqual(subject(["[lx]"]), [])
    })
    it('returns blank when given 11', () => {
      assert.deepEqual(subject(["[11]"]), [])
    })
    it('returns blank when given 111 in no packaging', () => {
      assert.deepEqual(subject(["111"]), [])
    })
    it('returns 1111 when given 1111 ', () => {
      assert.deepEqual(subject(["[1111]"]), ["1111"])
    })
  })
  describe('For two products', () => {
    it('returns blank when given [l],notSausage', () => {
      assert.deepEqual(subject(["[l]","notSausage"]), [])
    })
    it('returns blank when given [l],[1]', () => {
      assert.deepEqual(subject(["[l]","[1]"]), [])
    })
    it('returns blank when given x,y', () => {
      assert.deepEqual(subject(["x","y"]), [])
    })
    it('returns 1111,@@@@ when given 1111,@@@@', () => {
      assert.deepEqual(subject(["[1111]","[@@@@]"]), ["1111","@@@@"])
    })
  })
  describe('For three or more products', () => {
    it('returns blank when given [l],notSausage,alsoNotSausage', () => {
      assert.deepEqual(subject(["[l]","notSausage","alsoNotSausage"]), [])
    })
    it('returns @@@@ when given [@@@@],notSausage,[l]', () => {
      assert.deepEqual(subject(["[@@@@]","notSausage","[l]"]), ["@@@@"])
    })
  })
})

describe('Unpacking a truck', () => {
  let subject = script.truckUnpacker

  describe('For a single box', () => {
    it('returns blank when given [1]', () => {
      assert.equal(subject([["[1]"]]), "")
    })

    it('returns 1111 when given [[1111],[@@],[l]]', () => {
      assert.equal(subject([["[1111]","[@@]","[l]"]]), "1 1 1 1")
    })
  })

  describe('For two boxes', () => {

    it('returns @@@@ when given [[11111]],[[@@@@]]', () => {
      assert.equal(subject([["[11111]"],["[@@@@]"]]), "@ @ @ @")
    })

    it('returns llll@@@@ when given [[1],[llll]],[[cheese],[@@@@]]', () => {
      assert.equal(subject([["[1]","[llll]"],["[cheese]","[@@@@]"]]),
        "l l l l @ @ @ @")
    })


  })

  describe('For three or more boxes', () => {

    it('returns 1111 when given [[1111]],[[@]],[[@]]', () => {
      assert.equal(subject([["[1111]"],["[@]"],["[@]"]]), "1 1 1 1")
    })

    it('returns blank when given [[11]],[[@]],[[@@@]],[[1]]', () => {
      assert.equal(subject([["[11]"],["[@]"],["[@@@]"],["[1]"]]), "")
    })

    it('returns @@@@ when given [[1]],[[@@@@]],[@@@@@],[[beans]]', () => {
      assert.equal(subject([["[1]"],["[@@@@]"],["@@@@@"],["[beans]"]]), "@ @ @ @")
    })

    let test = [["[1111]","[@]","@"],["[beans]"],["[l]","chocolate",""]];

    it('returns 1111 when given ${test}', () => {
      assert.equal(subject(test), "1 1 1 1")
    })

    let second_test = [["[1111]"],["[llll]"],["[||||]"],
    ["[@@@@]"],["[CCCC]"]];

    let answer = "1 1 1 1 l l l l | | | | @ @ @ @";

    it('returns ${answer} when given ${second_test}', () => {
      assert.equal(subject(second_test), answer)
    })


  })

})

