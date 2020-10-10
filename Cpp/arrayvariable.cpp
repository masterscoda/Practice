/*
    Name: arrayvariable.cpp
    Author: Scott Bossard
    Date: 10/8/2020

    Description:
    Input: The first line contains two space-separated integers denoting the respective values of n (the number of variable-length arrays) and q (the number of queries).
Each line i of the n subsequent lines contains a space-separated sequence in the format k a[i]0 a[i]1 … a[i]k-1 describing the k-element array located at a[i].
Each of the q subsequent lines contains two space-separated integers describing the respective values of i (an index in array a) and j (an index in the array referenced by a[i]) for a query.

    Ouput: For each pair of i and j values (i.e., for each query), print a single integer that denotes the element located at index j of the array referenced by a[i]. There should be a total of q lines of output.
*/

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n, q, i, j, k;
    scanf("%d %d", &n, &q);
    vector<vector<int>> vec;
    for(int x = 0; x < n; x++){
        scanf("%d", &k);
        vector<int> subvec;
        for( int y = 0; y < k; y++){
            int element;
            scanf("%d", &element);
            subvec.push_back(element);
        }
        vec.push_back(subvec);
    }
    
    for (int z = 0; z < q; z++) {
        scanf("%d %d", &i, &j);
        cout << vec[i][j] << endl;
    }

    return 0;
}