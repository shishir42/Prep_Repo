namespace Sample
{
    class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");
            var am = new AsyncAwait();
            // am.CallLongRunningOperationAsync();
            am.OutRef();
            Console.WriteLine(am.AreEqual(1, 1));
            Console.WriteLine(am.AreEqual("s", "s"));
        }
    }
}