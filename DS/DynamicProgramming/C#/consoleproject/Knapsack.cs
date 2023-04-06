using System;

namespace consoleproject
{
    public class Knapsack
    {
        static int max(int a, int b)
        {
            return (a > b) ? a : b;
        }

        public static int KnapSackRecursion(int[] weights, int[] values, int capacity, int n)
        {
            //base condition 
            if(n == 0 || capacity == 0)
            {
                return 0;
            }

            // if(weights[n-1] <= capacity)
            // {
            //     return max(values[n-1] + KnapSackRecursion(weights, values, capacity-weights[n-1], n-1),
            //             KnapSackRecursion(weights, values, capacity, n-1));
            // }
            // else if(weights[n-1] > capacity)
            // {
            //     return KnapSackRecursion(weights, values, capacity, n-1);
            // }

            // Choice
            if (weights[n-1] > capacity)
            return KnapSackRecursion(weights, values, capacity, n-1);
 
            else return max(values[n-1] + KnapSackRecursion(weights, values, capacity-weights[n-1], n-1),
                        KnapSackRecursion(weights, values, capacity, n-1));
        }

        public static int KnapSackRecursionMemorize(int[] weights, int[] values, int capacity, int n, int[,] dp)
        {
            //base condition 
            if(n == 0 || capacity == 0)
            {
                return 0;
            }

            //
            if(dp[n, capacity] != -1)
            {
                return dp[n,capacity];
            }

            // Choice
            if (weights[n-1] > capacity)
            return dp[n, capacity] = KnapSackRecursion(weights, values, capacity, n-1);
 
            else return dp[n, capacity] = max(values[n-1] + KnapSackRecursion(weights, values, capacity-weights[n-1], n-1),
                        KnapSackRecursion(weights, values, capacity, n-1));
        }

        public static int KnapsackTopDown(int[] weights, int[] values, int capacity, int n)
        {
            //convert base condition of recursion into iteration 
            int[,] dp = new int[n+1, capacity+1];

            for(int i=0; i<=n; i++)
            {
                for(int w=0; w<=capacity; w++)
                {
                    //convert n into i and capacity into w
                    if(i == 0 || w == 0)
                    {
                        dp[i, w] = 0;
                    }
                    else if(weights[i-1] <= w)
                    {
                       dp[i, w] = max((values[i-1] + dp[i-1, w-weights[i-1]]), dp[i-1, w]); 
                    }
                    else
                    {
                         dp[i, w] = dp[i-1, w];
                    }
                }
            }

            return dp[n, capacity];
        }

        public static bool SubsetSum(int[] set, int sum)
        {
            int n = set.Length;
            bool [,] dp = new bool[n+1, sum+1];

            //Initialize the first column to true 
            for(int i=0; i<= n; i++)
            {
                dp[i, 0] = true;
            }

            for(int i=1; i<=n; i++)
            {
                for(int j=1; j<=sum; j++)
                {
                    if(set[i-1] <= j)
                    {
                        dp[i, j] = dp[i-1, j-set[i-1]] || dp[i-1, j];
                    }
                    else
                    {
                         dp[i, j] = dp[i-1, j];
                    }
                }
            }

            return dp[n, sum];
        } 

        public static bool EqualSumPartition(int[] arr)
        {
            int sum = 0;

            for(int i=0; i<arr.Length; i++)
            {
                sum = sum + arr[i];
            }

            if(sum % 2 != 0)
            {
                return false;
            }
            else if(sum % 2 == 0)
            {
                return SubsetSum(arr, sum/2);
            }

            return false;
        }
    
        public static int CountSubsetsWithSum(int[] set, int targetSum)
        {
            int n = set.Length;
            int [,] dp = new int[n+1, targetSum+1];

            //Initialize the first column to true 
            for(int i=0; i<= n; i++)
            {
                dp[i, 0] = 1;
            }

            for(int i=1; i<=n; i++)
            {
                for(int j=1; j<=targetSum; j++)
                {
                    if(set[i-1] <= j)
                    {
                        dp[i, j] = dp[i-1, j-set[i-1]] + dp[i-1, j];
                    }
                    else
                    {
                         dp[i, j] = dp[i-1, j];
                    }
                }
            }

            return dp[n, targetSum];
        }
    }
}