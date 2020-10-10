/*
    Name: vectorsort.cpp
    Author: Scott Bossard
    Date: 10/9/2020

    Description:
    Print the integers in the sorted order one by one in a single line followed by a space.
*/

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int length;
    vector<int> vec;
    cin >> length;
    for(int i = 0; i < length; i++) {
        int element;
        cin >> element;
        vec.push_back(element);
    }

    sort(vec.begin(), vec.end()); //Will sort all the elements in the vector

    for(int j = 0; j < vec.size(); j++) {
        cout << vec[j] << " ";
    }
    return 0;
}