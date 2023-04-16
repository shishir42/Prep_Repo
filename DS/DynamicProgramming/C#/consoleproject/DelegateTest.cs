namespace consoleproject
{
    public class DelegateTest
    {
        public delegate void addTwoNumber(int a, int b);
        public delegate void subtractTwoNumber(int a, int b);

        public void Sum2Num(int a, int b)
        {
            Console.WriteLine("({0} + {1}) = {2}", a, b, a + b);
        }

        public void Sub2Num(int a, int b)
        {
            Console.WriteLine("({0} - {1}) = {2}", a, b, a - b);            
        }
    }
}