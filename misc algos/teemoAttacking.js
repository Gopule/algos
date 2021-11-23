// Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly duration seconds. More formally, an attack at second t will mean Ashe is poisoned during the inclusive time interval [t, t + duration - 1]. If Teemo attacks again before the poison effect ends, the timer for it is reset, and the poison effect will end duration seconds after the new attack.

// You are given a non-decreasing integer array timeSeries, where timeSeries[i] denotes that Teemo attacks Ashe at second timeSeries[i], and an integer duration.

// Return the total number of seconds that Ashe is poisoned.

var findPoisonedDuration = function (timeSeries, duration) {
  let result = 0;
  let prevPoison = -1;
  for (let i = 0; i < timeSeries.length; i++) {
    if (timeSeries[i] <= prevPoison)
      result += timeSeries[i] + duration - 1 - prevPoison;
    else result += duration;
    prevPoison = timeSeries[i] + duration - 1;
  }
  return result;
};

console.log(findPoisonedDuration([1, 4], 2)); //4
console.log(findPoisonedDuration([1, 2], 2)); //3
