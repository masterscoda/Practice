/*
    Name: stllowerbound.cpp
    Author: Scott Bossard
    Date: 01/19/2020

    Description:
    You are appointed as the assistant to a teacher in a school and she is correcting the 
    answer sheets of the students.Each student can have multiple answer sheets.So the teacher has Q queries:

    1 X Y Add the marks Y to the student whose name is X
    2 X Erase the marks of the students whose name is X
    2 X Print the marks of the students whose name is X. (If didn't get any marks print 0)

    Input Format:

    The first line of the input contains Q where Q is the number of queries. 
    The next lines contain 1 query each.The first integer type, of each query is the type of the query.
    If query is of type 1, it consists of one string and an integer X and Y where is the name of the
    student and Y is the marks of the student.If query is of type 2 or 3 ,it consists of a single string
    X where X is the name of the student.

    Output Format:

    For queries of type 3 print the marks of the given student.

*/


#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <set>
#include <map>
#include <algorithm>
using namespace std;


int main() {
    int q, type, y;
    std::vector<int> vec;
    cin >> q;
    map<string,int> answerSheet; 
    string x;
    for(int i = 0; i < q; i++) {
        cin >> type >> x;
        if (type == 1){
            cin >> y;
            answerSheet[x] += y;
        }
        else if (type == 2)
            answerSheet.erase(x);
        else
            cout << answerSheet[x] << "\n";
    }
    return 0;
}