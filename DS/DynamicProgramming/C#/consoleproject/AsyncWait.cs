
namespace consoleproject
{
    public class AsyncWait
    {
        public async Task<int> LongRunningOperationAsync()
        {
            try
            {
                await Task.Delay(100);

                return 42;    
            }
            catch (System.Exception ex)
            {
                Console.WriteLine("Exception from LongRunningOperationAsync "+ ex);
                return 0;
            }
        }

        public async void CallLongRunningOperationAsync()
        {
            try
            {
                Task<int> task = LongRunningOperationAsync();

                DoOtherWork();

                int result = await task.ConfigureAwait(false);

                Console.WriteLine("result***** " + result);
            }
            catch (System.Exception ex)
            {
                Console.WriteLine("Exception " + ex);
            }
        }

        public void DoOtherWork()
        {
            for (int i = 0; i < 10; i++)
            {
                Console.WriteLine("i******" + i);
            }
        }
    }
}