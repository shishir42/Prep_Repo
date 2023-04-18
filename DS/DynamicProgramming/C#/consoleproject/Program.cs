using System;
using System.Linq;
using Design;
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

            Console.WriteLine("**************");
            int [] arr3 = { 1, 1, 2, 3};
            Console.WriteLine("CountTheNumberOfSubsetWithDiff result : "+ Knapsack.CountTheNumberOfSubsetWithDiff(arr3, 1));

            Console.WriteLine("**************");
            int [] arr4 = { 1, 1, 1, 1, 1};
            Console.WriteLine("TargetSumProblem result : "+ Knapsack.TargetSumProblem(arr4, 3));

            Console.WriteLine("**************HashMap***************");
            var res = HashMap.FindElementsGreaterThanNOverThreeBruteForce(new int[] {1, 3, 2, 5, 1, 3, 1, 5, 1});
            Console.WriteLine("Majority sum using brute force : ");
            res.ForEach(Console.WriteLine);

            res = HashMap.FindElementsGreaterThanNOverThree(new int[] {1, 3, 2, 5, 1, 3, 1, 5, 1});
            Console.WriteLine("Majority sum using Hashmap : ");
            res.ForEach(Console.WriteLine);

            Console.WriteLine("**************LCS***************");
            string x = "abcdgh";
            string y = "abedfhr";
            var r1 = LCS.LCSRecursive(x, y, x.Length, y.Length);
            Console.WriteLine("LCS - Length of common subsequence: " + r1);

            //Check the constraint 
            int n1 = x.Length;
            int m1 = y.Length;
            int[,] dpLCS = new int[n1+1,m1+1];
            for (int i = 0; i <= n1; i++)
            {
                for (int j = 0; j <= m1; j++)
                {
                    dpLCS[i, j] = -1;
                }
            }

            int len = LCS.LCSRecursiveMemorize(x, y, n1, m1, dpLCS);
            Console.WriteLine("LCS - Length of common subsequence Memorize : " + len);

            int len1 = LCS.LCSTopDownApproach(x, y, n1, m1);
            Console.WriteLine("LCS - Length of common subsequence Top Down Approach : " + len1);

            int len2 = LCS.LongestCommonSubstring(x, y, n1, m1);
            Console.WriteLine("LCS - Length of common substring Top Down Approach : " + len2);

            string x1 = "acbcf";
            string y1 = "abcdaf";
            // string x1 = "AGGTAB";
            // string y1 = "GXTXAYB";
            String s = LCS.LCSPrint(x1,y1,x1.Length,y1.Length);
            Console.WriteLine("LCS - Print common substring Top Down Approach : " + s);

            string x2 = "AGGTAB";
            string y2 = "GXTXAYB";
            int shortestLength = LCS.ShortestCommonSuperSequence(x2,y2);
            Console.WriteLine("LCS - ShortestCommonSuperSequence : " + shortestLength);

            //Minimum Number of Insertion and Deletion to convert String a to String b
            string x3 = "heap";
            string y3 = "pea";
            Console.WriteLine("LCS - Minimum Number of Insertion and Deletion to convert String a to String b : ");
            LCS.MinDelAndInsert(x3,y3);

            string x4= "agbcba";
            int len3 = LCS.LongestPalindromicSubsequence(x4);
            Console.WriteLine("LCS - LongestPalindromicSubsequence : " + len3);

            int len4 = LCS.MinimumNoDeletionToMakeItPalindrome(x4);
            Console.WriteLine("LCS - Minimum number of deletion in a string to make it a palindrome : " + len4);
            //Minimum number of insertion in a string to make it a palindrome same as above


            string x5 = "AGGTAB";
            string y5 = "GXTXAYB";
            string? printResult = LCS.ShortestCommonSuperSequencePrint(x5, y5);
            Console.WriteLine("LCS - Print shortest common Super sequence : " + printResult);
            //AGXGTXAYB or AGGXTXAYB

            string x6 = "ABACDABACD";
            string? res4 = LCS.LongestRepeatingSubsequence(x6);
            Console.WriteLine("LCS - Print Longest Repeating Subsequence : Not working " + res4);

            string x7 = "abc";
            string y7 = "ahbgdc";
            Console.WriteLine("LCS - SequencePatternMatching " + LCS.SequencePatternMatching(x7,y7));

            Console.WriteLine("**************Thread Test***************");
            var threadTest = new ThreadTest();
            threadTest.StartThread();

            Console.WriteLine("**************Delegate Test***************");
            var delObj = new DelegateTest();
            DelegateTest.addTwoNumber add = new DelegateTest.addTwoNumber(delObj.Sum2Num);
            DelegateTest.subtractTwoNumber sub = new DelegateTest.subtractTwoNumber(delObj.Sub2Num);

            add(10,20);
            sub(20,10);

            add.Invoke(10,20);
            sub.Invoke(20,10);

            Console.WriteLine("**************Async and Await***************");
            var asyncTest = new AsyncWait();
            asyncTest.CallLongRunningOperationAsync();


            // Console.WriteLine("**************Design***************");
            // DesignParkingSystem.Test();
        }
    }
}

// dotnet build 
// dotnet run  
// Debug on vscode https://www.youtube.com/watch?v=DAsyjpqhDp4