/*
    Name: string.cpp
    Author: Scott Bossard
    Date: 10/8/2020

    Description:
    Input: You are given two strings, a and b, separated by a new line. Each string will consist of lower case Latin characters ('a'-'z').
    Ouput: In the first line print two space-separated integers, representing the length of a and b respectively.
           In the second line print the string produced by concatenating a and b (a+b).
           In the third line print two strings separated by a space, a' and b'. a' and b' are the same as a and b, respectively, except that their first characters are swapped.
*/


#include <iostream>
#include <string>
using namespace std;

int main() {
	string s1, s2;
    cin >> s1 >> s2;

    int s1Length = s1.size();
    int s2Length = s2.size();

    string sCombined = s1 + s2;

    char temp;
    temp = s1[0];
    s1[0] = s2[0];
    s2[0] = temp;

    cout << s1Length << " " << s2Length << endl;
    cout << sCombined << endl;
    cout << s1 << " " << s2;
    
    return 0;
}