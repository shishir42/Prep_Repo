using System.Text;

namespace consoleproject
{
    public class LCS
    {
        public static int LCSRecursive(string x, string y, int n, int m)
        {
            // base condition 
            if(n == 0 || m == 0)
            {
                return 0;
            }

            //Choice condition
            if(x[n-1] == y[m-1])
            {
                return 1 + LCSRecursive(x, y, n-1, m-1);
            }
            else
            {
                return Math.Max(LCSRecursive(x, y, n, m-1), LCSRecursive(x, y, n-1, m));
            }
        }

        public static int LCSRecursiveMemorize(string x, string y, int n, int m, int [,] dp)
        {
            //base condition 
            if(n == 0 || m ==0)
            {
                return 0;
            }

            //Memorize 
            if(dp[n,m] != -1)
            {
                return dp[n,m];
            }

            // choice 
            if(x[n-1] == y[m-1])
            {
                dp[n,m] =  1 + LCSRecursiveMemorize(x, y, n-1, m-1, dp);
            }
            else
            {
                dp[n,m] =  Math.Max(LCSRecursiveMemorize(x, y, n-1, m, dp), LCSRecursiveMemorize(x, y, n, m-1, dp));
            }

            return dp[n,m];
        }
    
        public static int LCSTopDownApproach(string x, string y, int m, int n)
        {
            int[,] dp = new int[m+1,n+1];

            for(int i = 0; i<m+1; i++)
            {
                for(int j = 0; j<n+1; j++)
                {
                    if(i == 0 || j == 0)
                    {
                        dp[i,j] = 0;
                    }
                }
            }

            for(int i=1; i<m+1; i++)
            {
                for(int j=1; j<n+1; j++)
                {
                    if(x[i-1] == y[j-1])
                    {
                        dp[i,j] = 1 + dp[i-1,j-1];
                    }
                    else
                    {
                        int val = Math.Max(dp[i, j-1], dp[i-1,j]);
                        dp[i,j] = val;
                    }
                }
            }

            return dp[m,n];
        }
    
        public static int LongestCommonSubstring(string x, string y, int m, int n)
        {
            //Initialization 
            int[,] dp = new int[m+1, n+1];
            int count = 0;
            for (int i = 0; i < m+1; i++)
            {
                for (int j = 0; j < n+1; j++)
                {
                    if(i == 0 || j == 0)
                    {
                        dp[i,j] = 0;
                    }   
                }
            }

            for (int i = 1; i < m+1; i++)
            {
                for (int j = 1; j < n+1; j++)
                {
                    if(x[i-1] == y[j-1])
                    {
                        dp[i,j]  = 1 + dp[i-1,j-1];
                        count = Math.Max(dp[i,j], count);
                    }
                    else
                    {
                        dp[i,j] = 0;
                    }
                }
            }

            return count;
        }
    
        public static string? LCSPrint(string x, string y, int m, int n)
        {
            //Initialized
            int[,] dp = new int[m+1, n+1];
            for(int i=0; i<m+1; i++)
            {
                for(int j=0; j<n+1; j++)
                {
                    if(i == 0 || j == 0)
                    {
                        dp[i,j] = 0;
                    }
                }
            }

            for(int i = 1; i<m+1; i++)
            {
                for(int j=1; j<n+1; j++)
                {
                    if(x[i-1] == y[j-1])
                    {
                        dp[i,j] = 1 + dp[i-1,j-1];
                    }
                    else
                    {
                        dp[i,j] = Math.Max(dp[i-1,j], dp[i,j-1]);
                    }
                }
            }

            int ii=m, jj=n;
            string s = "";
            while(ii>0 && jj>0)
            {
                if(x[ii-1] == y[jj-1])
                {
                    s += x[ii-1];
                    ii--;
                    jj--; 
                }
                else
                {
                    if(dp[ii,jj-1] > dp[ii-1,jj])
                    {
                        jj--;
                    }
                    else
                    {
                        ii--;
                    }
                }
            }

            while (ii > 0) {
                s += x[ii-1];
                ii--;
            }
            while (jj > 0) {
                s += y[jj-1];
                jj--;
            }

            //AGGXTXAYB
            return ReversString(s);
        }    

        public static string? ShortestCommonSuperSequencePrint(string x, string y)
        {
            int m = x.Length;
            int n = y.Length;

            int[,] dp = new int[m+1,n+1];
            for(int i=0; i<m+1; i++)
            {
                for(int j=0; j<n+1; j++)
                {
                    if(i==0 || j==0)
                    {
                        dp[i,j] = 0;
                    }
                }
            }

            for(int i=1; i<m+1; i++)
            {
                for(int j=1; j<n+1; j++)
                {
                    if(x[i-1] == y[j-1])
                    {
                        dp[i,j] = 1 + dp[i-1,j-1];
                    }
                    else
                    {
                        dp[i,j] = Math.Max(dp[i-1, j], dp[i, j-1]);
                    }
                }
            }

            int ii = m, jj=n;
            StringBuilder s = new StringBuilder();
            // string s = "";

            while(ii > 0 && jj > 0)
            {
                if(x[ii - 1] == y[jj-1])
                {
                    s.Append(x[ii-1]);
                    // s += x[ii-1];
                    ii--;
                    jj--;
                }
                else
                {
                    if(dp[ii, jj-1] > dp[ii-1, jj])
                    {
                        s.Append(y[jj-1]);
                        // s += y[jj-1];
                        jj--;
                    }
                    else
                    {
                        s.Append(x[ii-1]);
                        // s += x[ii-1];
                        ii--;
                    }
                }
            }

            while (ii > 0) {
                s.Append(x[ii-1]);
                ii--;
            }
            while (jj > 0) {
                s.Append(y[jj-1]);
                jj--;
            }

           return ReversString(s.ToString());
        }

        public static int  ShortestCommonSuperSequence(string x, string y)
        {
            int m = x.Length;
            int n = y.Length;
            int shortestLength = (m+n)-LCSTopDownApproach(x,y,m,n);
            return shortestLength;
        }

        //Minimum Number of Insertion and Deletion to convert String a to String b
        public static void MinDelAndInsert(string x, string y)
        {
            int m = x.Length;
            int n = y.Length;
            int lcs = LCSTopDownApproach(x,y,m,n);

            Console.WriteLine($"Minimum no of deletion {m-lcs}");
            Console.WriteLine($"Minimum no of insertion {n-lcs}");
        }

        public static int LongestPalindromicSubsequence(string x)
        {
            string y = ReversString(x);
            int length = LCSTopDownApproach(x, y, x.Length, y.Length);
            return length;
        }

        public static int MinimumNoDeletionToMakeItPalindrome(string x)
        {
            int LPS = LongestPalindromicSubsequence(x);
            int minLenthOfDel = x.Length - LPS;
            return minLenthOfDel;
        }

        public static string LongestRepeatingSubsequence(string x)
        {
            //Initialized 
            int n = x.Length;
            int[,] dp = new int [n+1, n+1];

            for(int i=0 ; i< n+1; i++)
            {
                for(int j=0; j< n+1; j++)
                {
                    if(i==0 || j==0)
                    {
                        dp[i,j] = 0;
                    }
                }
            }

            for(int i = 1; i< n+1; i++)
            {
                for(int j=1; j< n+1; j++)
                {
                    if(x[i-1] == x[j-1] & i != j)
                    {
                        dp[i,j] = 1 + dp[i-1,j-1];
                    }
                    else
                    {
                        dp[i,j] = Math.Max(dp[i-1, j], dp[i,j-1]);
                    }
                }
            }

            int ii = n, jj = n;
            StringBuilder sb = new StringBuilder();
            while(ii > 0 && jj > 0)
            {
                if(x[ii-1] == x[jj-1])
                {
                    sb.Append(x[ii-1]);
                    ii--;
                    jj--;
                }
                else
                {
                    if(dp[ii, jj-1] > dp[ii-1,jj])
                    {
                        sb.Append(x[jj-1]);
                        jj--;
                    }
                    else
                    {
                        sb.Append(x[ii-1]);
                        ii--;
                    }
                }
            }

            while (ii > 0) {
                sb.Append(x[ii-1]);
                ii--;
            }
            while (jj > 0) {
                sb.Append(x[jj-1]);
                jj--;
            }

            return ReversString(sb.ToString());
        }
        public static string ReversString(string str)
        {
            char[] charArray = str.ToCharArray();
            int leftIndex = 0;
            int rightIndex = charArray.Length - 1;
            while (leftIndex < rightIndex)
            {
                char temp = charArray[leftIndex];
                charArray[leftIndex] = charArray[rightIndex];
                charArray[rightIndex] = temp;
                leftIndex++;
                rightIndex--;
            }
            string reversedString = new string(charArray);
            return reversedString;
        }
        public static void Reversed()
        {
            Stack<int> stack = new Stack<int>();
            int[] sequence = { 1, 2, 3, 4, 5 };
            foreach (int element in sequence)
            {
                stack.Push(element);
            }

            List<int> reversedSequence = new List<int>();
            while (stack.Count > 0)
            {
                reversedSequence.Add(stack.Pop());
            }

            // Output the reversed sequence
            foreach (int element in reversedSequence)
            {
                Console.Write(element + " ");
            }
            // Output: 5 4 3 2 1

        }
    }
}

//https://leetcode.com/problems/shortest-common-supersequence/solutions/3362455/best-o-n-m-solution/
