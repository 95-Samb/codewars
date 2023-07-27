using Multiples3or5;

namespace Multiples3or5Tests;

public class Tests
{
    [SetUp]
    public void Setup()
    {
    }

    [Test]
    public void Test1()
    {
        Assert.That(Multiples3or5.Execute());
    }
}