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
        yield return new object[] { new List<long> { 1, 9, 2 }, 2, 2 };
        yield return new object[] { new List<long> {3,4,5},1,4 };
        yield return new object[] { new List<long> {3,4,5},3,9 };
        yield return new object[] { new List<long> {3,4,5},4,23 };
    }
    public static IEnumerable<object[]> GetTestDataLargeN()
    {
        yield return new object[] { new List<long> { 1, 1, 1 }, 25, 1219856746 };
        yield return new object[] { new List<long> { 1, 2, 3 }, 25, 2052198929 };
        yield return new object[] { new List<long> { 6, 7, 2 }, 25, -2575238999 };
        yield return new object[] { new List<long> { 3, 2, 1 }, 35, 23471258855679 };
    }
    [Fact]
    public void TripleShiftian_ShouldReturnAnInteger()
    {
        var firstThree = new List<long> { 1, 1, 1 };
        var nthElement = 1;

        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.True(returnedInteger is Int64);
    }
    [Theory]
    [MemberData(nameof(GetTestDataSmallN))]
    public void TripleShiftian_ShouldReturnCorrectNumberForSmallN(List<long> firstThree,int nthElement, long expected)
    {
        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.Equal(expected,returnedInteger);
    }
    [Theory]
    [MemberData(nameof(GetTestDataLargeN))]
    public void TripleShiftian_ShouldReturnCorrectNumberForLargeN(List<long> firstThree,int nthElement, long expected)
    {
        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.Equal(expected,returnedInteger);
    }
}