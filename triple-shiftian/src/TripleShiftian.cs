namespace Source;

public class TripleShiftian
{
    public TripleShiftian()
    {
        
    }

    public long Execute(List<long> firstThree, int n)
    {
        List<long> currentSequence = firstThree;
        if (n < 3)
        {
            return firstThree[n];
        }

        while (currentSequence.Count < n + 1)
        {
            int i = currentSequence.Count;
            long nextElement = 4 * currentSequence[i - 1] - 5 * currentSequence[i - 2] + 3 * currentSequence[i - 3];
            currentSequence.Add(nextElement);
        }
        return currentSequence.Last();
    }
}