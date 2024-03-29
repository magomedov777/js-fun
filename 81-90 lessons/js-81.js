//new lessons | thursday
//explosive sum task
//first
let result = []
function sum(n, m = n) {
  if (n == 0) return 1
  if (n < 0 || m == 0) return 0
  if (result[n] && result[n][m]) return result[n][m]
  let comp = sum(n, m - 1) + sum(n - m, m)
  if (!result[n]) {
    result[n] = []
  }
  result[n][m] = comp
  return comp
}

//good | recursion
function sum(num) {
  const memo = {}
  function sumRecursive(target, max) {
    let partitions = 0
    for (let i = Math.min(target, max); i > 0; i--) {
      if (i === target || i === 1) partitions++
      else
        partitions += memo[`${target - i}-${i}`] || sumRecursive(target - i, i)
    }
    memo[`${target}-${max}`] = partitions
    return partitions
  }
  return sumRecursive(num, num)
}

//like
const _sum = (num) => {
  const dp = [1, ...new Array(num).fill(0)]
  for (let i = 1; i <= num; i++) {
    for (let j = i; j <= num; j++) {
      dp[j] += dp[j - i]
    }
  }
  return dp[num]
}

//classes | OOP
function sum(n) {
  this.mem = this.mem || [1]
  if (n < 0) return 0
  if (this.mem[n]) return this.mem[n]
  this.mem[n] = 0
  for (let i = 1; i <= n; i++)
    this.mem[n] +=
      (i % 2 ? 1 : -1) *
      (sum(n - (i * (3 * i - 1)) / 2) + sum(n - (i * (3 * i + 1)) / 2))
  return this.mem[n]
}

//like
var sums = { 0: 1 }
function g(n) {
  return (n * (3 * n - 1)) / 2
}
function sum(n) {
  if (n < 0) return 0
  if (sums.hasOwnProperty(n)) return sums[n]
  for (var i = 1, count = 0, term; term !== 0; i++) {
    term = sum(n - g(-i))
    term += sum(n - g(i))
    count += (i % 2 == 0 ? -1 : 1) * term
  }
  return (sums[n] = count)
}

//---------------------------------------------------------------------------------
//48 min task
//first
let pointsPer48 = (ppg, mpg) =>
  ppg === 0 && mpg === 0 ? 0 : +((ppg / mpg) * 48).toFixed(1)

//base
function pointsPer48(ppg, mpg) {
  return +((ppg / mpg) * 48).toFixed(1) || 0
}

//good
const pointsPer48 = (ppg, mpg) => (mpg ? +((ppg * 48) / mpg).toFixed(1) : 0)

//like
function pointsPer48(ppg, mpg) {
  return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
}

//clever
let pointsPer48 = (ppg, mpg) =>
  mpg == 0 ? 0 : Math.round((ppg / mpg) * 48 * 10) / 10
