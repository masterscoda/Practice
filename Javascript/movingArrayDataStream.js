/*
Author: Scott Bossard
Date: 12/12/2020
Description:
Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.

*/

function MovingAverage(size, val) {
    var queue = [];
    queue.push(val);
    var windowSum = 0;
    for(var i = Math.max(0, queue.length - size); i < queue.length; i++){
        windowSum += Number(queue[i]);
    }
    return windowSum * 1.0 / Math.min(queue.length, size);  
}

MovingAverage(3, [1,10,3,5]);