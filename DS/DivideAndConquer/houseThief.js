function getMaxMoney(houses) {
    const n = houses.length;
    if (n === 0) return 0;
    if (n === 1) return houses[0];
    if (n === 2) return Math.max(houses[0], houses[1]);
  
    const dp = new Array(n);
    dp[0] = houses[0];
    dp[1] = Math.max(houses[0], houses[1]);
  
    for (let i = 2; i < n; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + houses[i]);
    }
  
    return dp[n - 1];
  }
  
  // Example usage:
  const houses = [2, 7, 9, 3, 1];
  const maxMoney = getMaxMoney(houses); // Returns 12
  console.log(maxMoney);

  function getMaxMoney1(houses) {
    const n = houses.length;
    if (n === 0) return 0;
    if (n === 1) return houses[0];
    if (n === 2) return Math.max(houses[0], houses[1]);
  
    return Math.max(
      getMaxMoney1(houses.slice(0, n - 2)) + houses[n - 1],
      getMaxMoney1(houses.slice(0, n - 1))
    );
  }

  console.log(getMaxMoney1(houses))