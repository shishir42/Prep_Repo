namespace consoleproject
{
    using System;
    using System.Collections.Concurrent;
    public class Test
    {
        private readonly object _lock = new object();
        private int counter = 0;

        private readonly ConcurrentDictionary<int, string> dic = new ConcurrentDictionary<int, string>();

        public void CounterIncrement()
        {
            lock(_lock)
            {
                counter++;
            }
        }

        public void AddToDictionary(int key, string value)
        {
            dic.TryAdd(key, value);
        }
    }

















}