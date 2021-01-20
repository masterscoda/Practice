/*
    Name: stllowerbound.cpp
    Author: Scott Bossard
    Date: 01/19/2020

    Description:
    Input:
        The first line of the input contains the number of integers . The next line contains integers in sorted order. 
        The next line contains , the number of queries. Then lines follow each containing a single integer.
        Sample Input
        8
        1 1 2 2 6 9 9 15
        4
        1
        4
        9
        15

    Output:
        For each query you have to print "Yes" (without the quotes) if the number is present and at which index(1-based) it is present separated by a space.

        If the number is not present you have to print "No" (without the quotes) followed by the index of the next smallest number just greater than that number.

        You have to output each query in a new line.

        Sample Output
        Yes 1
        No 5
        Yes 6
        Yes 8

*/

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int n;
    std::vector<int> vec;
    cin >> n;
    for(int i = 0; i < n; i++) {
        int element;
        cin >> element;
        vec.push_back(element);
    }
    
    int q;
    cin >> q;
    for(int i = 0; i < q; i++) {
        int y;
        std::vector<int>::iterator low, it;
        cin >> y;
        it = std::find(vec.begin(), vec.end(), y);
        if(it != vec.end()){
            cout << "Yes " << (it - vec.begin() + 1) << "\n";
        }
        else{
            low = std::lower_bound (vec.begin(), vec.end(), y);
            cout << "No " << (low - vec.begin() + 1) << "\n";
        }
        
    }
    
    return 0;
}