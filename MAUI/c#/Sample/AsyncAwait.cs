namespace Sample
{
    using System;
    using System.Threading.Tasks;
    public class AsyncAwait
    {
        public async void CallLongRunningOperationAsync()
        {
            // Call the LongRunningOperationAsync method
            Task<int> task = LongRunningOperationAsync();

            // Do some other work while the operation is running
            DoOtherWork();

            // Wait for the operation to complete
            int result = await task;

            // Use the result
            Console.WriteLine(result);
        }

        public bool AreEqual<T>(T value1, T value2)
        {
            return value1.Equals(value2);
        }

        public void OutRef()
        {
            int a;
            int b = 5;
            int c = this.Update(out a, ref b);
            Console.WriteLine("Out " + a + " " + "Ref " + b + " c " + c);
        }

        public int Update(out int c, ref int d)
        {
            c = 100;
            return c+d;
        }

        private void DoOtherWork()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("DoOtherWork " + i);
            }
        }

        private async Task<int> LongRunningOperationAsync()
        {
             try
             {
                Console.WriteLine("LongRunningOperationAsync start");
                // throw new Exception("test one");
                await Task.Delay(2000);
                Console.WriteLine("LongRunningOperationAsync end");

                return 10;   
             }
             catch (System.Exception ex)
             {
                Console.WriteLine("Exception " + ex.Message);
                // throw new Exception("test one11");
                return 0;
             }       
        }
    }
}