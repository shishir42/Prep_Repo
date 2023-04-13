namespace consoleproject
{
    using System.Collections.Generic;
    public class HashMap
    {
        public static List<int> FindElementsGreaterThanNOverThreeBruteForce(int[] arr)
        {
            int n = arr.Length;
            int threshold = n/3;
            List<int> result = new List<int>();

            for (int i = 0; i < n; i++)
            {
                int count = 0;

                for(int j=0; j<n; j++)
                {
                    if(arr[i] == arr[j])
                    {
                        count++;
                    }
                }

                if(count > threshold && !result.Contains(arr[i]))
                {
                    result.Add(arr[i]);
                }    
            }
            return result;
        }

         public static List<int> FindElementsGreaterThanNOverThree(int[] arr)
         {
            int n = arr.Length;
            int threshold = n/3;
            List<int> result = new List<int>();
            Dictionary<int, int> map = new Dictionary<int, int>();

            for(int i=0; i<n; i++)
            {
                if(map.ContainsKey(arr[i]))
                {
                    map[arr[i]]++;
                }
                else
                {
                    map.Add(arr[i], 1);
                }
            }

            foreach(KeyValuePair<int, int> kvp in map)
            {
                if(kvp.Value > threshold)
                {
                    result.Add(kvp.Key);
                }
            }    

            return result;
         }
    }
}