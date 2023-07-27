using System;
using Source;

namespace tests;

public class TripleShiftianTests
{
    private readonly TripleShiftian tripleShiftian;
    public TripleShiftianTests()
    {
        tripleShiftian = new TripleShiftian();
    }

    public static IEnumerable<object[]> GetTestDataSmallN()
    {
        yield return new object[] { new List<int> { 1, 9, 2 }, 2, 2 };
        yield return new object[] { new List<int> {3,4,5},1,4 };
        yield return new object[] { new List<int> {3,4,5},3,9 };
        yield return new object[] { new List<int> {3,4,5},4,23 };
    }
    [Fact]
    public void TripleShiftian_ShouldReturnAnInteger()
    {
        var firstThree = new List<int> { 1, 1, 1 };
        var nthElement = 1;

        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.True(returnedInteger is Int32);
    }
    [Theory]
    [MemberData(nameof(GetTestDataSmallN))]
    public void TripleShiftian_ShouldReturnCorrectNumberForSmallN(List<int> firstThree,int nthElement, int expected)
    {
        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.Equal(expected,returnedInteger);
    }
}