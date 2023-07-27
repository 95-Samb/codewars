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
}