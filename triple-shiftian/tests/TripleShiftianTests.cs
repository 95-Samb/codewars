using Source;

namespace tests;

public class TripleShiftianTests
{
    private readonly TripleShiftian tripleShiftian;
    public TripleShiftianTests()
    {
        tripleShiftian = new TripleShiftian();
    }
    [Fact]
    public void TripleShiftian_ShouldReturnAnInteger()
    {
        var firstThree = new int[] { 1, 1, 1 };
        var nthElement = 1;

        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.True(returnedInteger is Int32);
    }
    [Theory]
    [InlineData(new int[] {1,9,2},2,2)]
    [InlineData(new int[] {3,4,5},1,4)]
    [InlineData(new int[] {3,4,5},3,9)]
    public void TripleShiftian_ShouldReturnCorrectNumberForSmallN(int[] firstThree,int nthElement, int expected)
    {
        var returnedInteger = tripleShiftian.Execute(firstThree, nthElement);
        Assert.Equal(expected,returnedInteger);
    }
}