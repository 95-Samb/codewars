namespace Source;

public class TripleShiftian
{
    public TripleShiftian()
    {
        
    }

    public int Execute(int[] firstThree, int n)
    {
        if (n < 3)
        {
            return firstThree[n];
        }
        else
        {
            return 9;
        }
    }
}