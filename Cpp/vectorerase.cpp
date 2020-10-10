/*
    Name: vectorerase.cpp
    Author: Scott Bossard
    Date: 10/9/2020

    Description:
    Print the size of the vector in the first line and the elements of the vector after the two erase operations in the second line separated by space.
*/

#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int length, erase1, erase2, erase3;
    vector<int> vec;
    cin >> length;
    for(int i = 0; i < length; i++) {
        int element;
        cin >> element;
        vec.push_back(element);
    }

    cin >> erase1 >> erase2 >> erase3;
    vec.erase(vec.begin() + erase1 - 1);
    vec.erase(vec.begin() + erase2 - 1,vec.begin() + erase3 - 1);

    cout << vec.size() << "\n";
    for(int j = 0; j < vec.size(); j++) {
        cout << vec[j] << " ";
    }

    return 0;
}