//new lesson | monday
//salary task
//first
function match(candidate, job) {
  if (!job.maxSalary || !candidate.minSalary) throw 'Error!'
  return job.maxSalary >= candidate.minSalary * 0.9
}

//good
const match = (candidate, job) => {
  if (!candidate.minSalary || !job.maxSalary) {
    throw new Error(123)
  }
  return candidate.minSalary - candidate.minSalary / 10 <= job.maxSalary
}

//like
function match(candidate, job) {
  if ('minSalary' in candidate && 'maxSalary' in job) {
    return candidate.minSalary * 0.9 <= job.maxSalary
  }
  throw new Error()
}

//normal
function match(candidate, job) {
  if (candidate.minSalary == undefined || job.maxSalary == undefined) {
    throw 'error'
  }
  return candidate.minSalary * 0.9 <= job.maxSalary
}

//if/else
function match(candidate, job) {
  if (candidate.minSalary == undefined) {
    throw error('Candidate has no minSalary')
  } else if (job.maxSalary == undefined) {
    throw error('Job has no maxSalary')
  } else {
    return candidate.minSalary * 0.9 <= job.maxSalary ? true : false
  }
}

//like
const match = (candidate, job) => {
  const { minSalary } = candidate,
    { maxSalary } = job
  if (!minSalary || !maxSalary) {
    throw 'Error! Parameter is not a number.'
  } else if (maxSalary >= minSalary * 0.9) {
    return true
  }
  return maxSalary >= minSalary ? true : false
}

//---------------------------------------------------------------

//Grader task
//first
function grader(score) {
  if (score > 1 || score < 0.6) return 'F'
  if (score < 0.7) return 'D'
  if (score < 0.8) return 'C'
  if (score < 0.9) return 'B'
  return 'A'
}

//else/if
function grader(score) {
  if (score > 1 || score < 0.6) return 'F'
  else if (score >= 0.9) return 'A'
  else if (score >= 0.8) return 'B'
  else if (score >= 0.7) return 'C'
  else if (score >= 0.6) return 'D'
}

//ternary
grader = (s) =>
  s > 1 || s < 0.6 ? 'F' : s < 0.7 ? 'D' : s < 0.8 ? 'C' : s < 0.9 ? 'B' : 'A'

//switch/case
const grader = (s) => {
  switch (true) {
    case s > 1:
      return 'F'
    case s >= 0.9:
      return 'A'
    case s >= 0.8:
      return 'B'
    case s >= 0.7:
      return 'C'
    case s >= 0.6:
      return 'D'
    default:
      return 'F'
  }
}
