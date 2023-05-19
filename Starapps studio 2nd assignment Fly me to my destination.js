/*
This code calculates the minimum number of planes required to travel between airports.
The calculation starts from the second last airport and proceeds towards the first airport.
Maximum airplanes required to reach last airport will be N-1 if possible to go to last airport
The counting starts from the second last airport.

*/

function planes(a) {
  let n = a.length - 1; // Total number of airports

  let dp = Array(n + 1).fill(n+1); //Maximum number of airstops needed from any airport to reach the last will always be less than or equals to n-1, hence default value of n+1 can be used to signify non-reachability to last airport
  dp[n] = 0; // Minimum planes required at the last airport is 0

  let i = 1; // Start from the second last airport
  while (i <= n) {
    let j = 1;
    // Check if there is enough fuel units available to reach the next airport
    while (j <= a[n - i] && n - i + j <= n) {
      let min1 = 1 + dp[n - i + j]; // Minimum planes required to reach the last airport from the current airport
      dp[n - i] = Math.min(min1, dp[n - i]); // Update the minimum planes required at the current airport
      j += 1;
    }
    i += 1;
  }

  if (dp[0] >= n + 1) {
    return -1; // If the minimum planes required at the starting airport is still greater than the maximum fuel units available, return -1
  } else {
    return dp[0]; // Return the minimum planes required at the starting airport
  }
}

let a =  [1,6,3,4,5,0,0,0,0,0,6];
console.log(planes(a));


