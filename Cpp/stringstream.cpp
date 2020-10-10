/*
    Name: stringstream.cpp
    Author: Scott Bossard
    Date: 10/8/2020

    Description:
    Input: There is one line of integers separated by commas.
    Ouput: Print each input integer on a new line using stringstream.
*/

#include <sstream>
#include <vector>
#include <iostream>
using namespace std;

vector<int> parseInts(string str) {
	stringstream ss(str);
    int i;
    char ch;
    vector<int> vec;
    while (ss >> i){
        vec.push_back(i);
        ss >> ch;
    } 
        
    return vec;
}

int main() {
    string str;
    cin >> str;
    vector<int> integers = parseInts(str);
    for(int i = 0; i < integers.size(); i++) {
        cout << integers[i] << "\n";
    }
    
    return 0;
}