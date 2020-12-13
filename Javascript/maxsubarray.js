/*
Author: Scott Bossard
Date: 12/12/2020
Description:
Given two integer arrays A and B, return the maximum length of an subarray that appears in both arrays.

Example 1:

Input:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
Output: 3
Explanation: 
The repeated subarray with maximum length is [3, 2, 1].

Note:

    1 <= len(A), len(B) <= 1000
    0 <= A[i], B[i] < 100

*/

function findLength(A, B) {
    var ans = 0;
    var dict = Array(A.length + 1).fill(0).map(x => Array(B.length + 1).fill(0));
    for (var i = A.length - 1; i >= 0; i--) {
        for (var j = B.length - 1; j >= 0; j--) {
            if (A[i] == B[j]) {
                dict[i][j] = dict[i+1][j+1] + 1;
                if (ans < dict[i][j]){
                    ans = dict[i][j];
                } 
            }
        }
    }
    return ans;
}

findLength([1,2,3,2,1],[3,2,1,4,7]);