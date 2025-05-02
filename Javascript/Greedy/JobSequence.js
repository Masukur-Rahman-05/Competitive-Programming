/*
Given two arrays: deadline[] and profit[], where the index of deadline[] represents a job ID, and deadline[i] denotes the deadline for that job and profit[i] represents profit of doing ith job. Each job takes exactly one unit of time to complete, and only one job can be scheduled at a time. A job earns its corresponding profit only if it is completed within its deadline.

The objective is to determine:

    The maximum profit that can be obtained by scheduling the jobs optimally.
    The total number of jobs completed to achieve this maximum profit.

Examples: 

    Input: deadline[] = [4, 1, 1, 1], profit[] = [20, 10, 40, 30]
    Output: 2 60
    Explanation: We select 1st and 3rd jobs. All jobs except first job have a deadline of 1, thus only one of these can be selected along with the first job with the total profit gain of 20 + 40 = 60.

    Input: deadline[] = [2, 1, 2, 1, 1], profit[] = [100, 19, 27, 25, 15]
    Output: 2 127
    Explanation: The first and third job have a deadline of 2, thus both of them can be completed and other jobs have a deadline of 1, thus any one of them can be completed. Both the jobs with a deadline of 2 is having the maximum associated profit, so these two will be completed, with the total profit gain of 100 + 27 = 127.


*/

const JobSequence = (deadline, profit) => {
  let maxDeadline = Math.max(...deadline);
  let result = Array(maxDeadline).fill(null);

  let jobs = [];
  let totalProfit = 0;
  let slot = 0;

  for (let i = 0; i < deadline.length; i++) {
    jobs.push({ deadline: deadline[i], profit: profit[i] });
  }

  jobs.sort((a, b) => b.profit - a.profit);

  for (let job of jobs) {
    for (let i = job.deadline - 1; i >= 0; i--) {
      if (result[i] === null) {
        result[i] = true;
        totalProfit += job.profit;
        slot++;
        break;
      }
    }
  }

  return [slot, totalProfit];
};

console.log(JobSequence([4, 1, 1, 1], [20, 10, 40, 30]));
console.log(JobSequence([2, 1, 2, 1, 1], [100, 19, 27, 25, 15]));
