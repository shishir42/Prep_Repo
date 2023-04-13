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
    }
}