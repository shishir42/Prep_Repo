namespace consoleproject
{
    public class ThreadTest
    {
        private volatile bool isRunning;

        public void StartThread()
        {
            isRunning = true;

            Thread thread1 = new Thread(DoWork);
            Thread thread2 = new Thread(DoWork);

            thread1.Start();
            thread2.Start();

            Thread.Sleep(1000);
            isRunning = false;
        }

        private void DoWork()
        {
            while(isRunning)
            {
                Console.WriteLine("Working...");
                Thread.Sleep(100);
            }
        }
    }
}