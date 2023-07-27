namespace Source;

public class TripleShiftian
{
    public TripleShiftian()
    {
        
    }

    public int Execute(List<int> firstThree, int n)
    {
        List<int> currentSequence = firstThree;
        if (n < 3)
        {
            return firstThree[n];
        }

        while (currentSequence.Count < n + 1)
        {
            int i = currentSequence.Count;
            int nextElement = 4 * currentSequence[i - 1] - 5 * currentSequence[i - 2] + 3 * currentSequence[i - 3];
            currentSequence.Add(nextElement);
        }
        return currentSequence.Last();
    }
}