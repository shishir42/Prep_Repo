using System;

namespace consoleproject
{
    public class Program
    {
        public static void Main(string[] args)
        {
            Console.WriteLine("**************");
            int capacity = 50; // maximum weight the knapsack can hold
            int[] values = new int[] { 60, 100, 120 }; // values of the items
            int[] weights = new int[] { 10, 20, 30 }; // weights of the items
            int n = values.Length; // number of items
            int max = Knapsack.KnapSackRecursion(weights, values, capacity, n);
            Console.WriteLine("Max value: "+ max);
            Console.WriteLine("**************");

            int[,] dp = new int[n+1, capacity+1];

            for (int i = 0; i <= n; i++)
            {
                for (int j = 0; j <= capacity; j++)
                {
                    dp[i, j] = -1;
                }
            }

            int maxValue = Knapsack.KnapSackRecursionMemorize(weights, values, capacity, n, dp);
            Console.WriteLine("Max KnapSackRecursionMemorize: "+ maxValue);
            Console.WriteLine("**************");

            maxValue = Knapsack.KnapsackTopDown(weights, values, capacity, n);
            Console.WriteLine("Max KnapsackTopDown: "+ maxValue);
            Console.WriteLine("**************");

            int[] set = {3, 1, 7, 5};
            int sum = 10;
            bool result = Knapsack.SubsetSum(set, sum);
            Console.WriteLine("SubsetSum result : "+ result);

            Console.WriteLine("**************");
            int [] arr = {1, 5, 11, 5};
            Console.WriteLine("EqualSumPartition result : "+ Knapsack.EqualSumPartition(arr));

            Console.WriteLine("**************");
            int [] arr1 = {2,3,5,6,8,10};
            int targetSum = 10;
            Console.WriteLine("CountSubsetsWithSum result : "+ Knapsack.CountSubsetsWithSum(arr1, targetSum));

            Console.WriteLine("**************");
            // int [] arr2 = {1, 6, 11, 5};
            int [] arr2 = { 3, 1, 4, 2, 2, 1};
            Console.WriteLine("MinSubsetSumDiff result : "+ Knapsack.MinSubsetSumDiff(arr2));
        }
    }
}


// dotnet run  