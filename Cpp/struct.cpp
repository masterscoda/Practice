/*
    Name: struct.cpp
    Author: Scott Bossard
    Date: 10/8/2020

    Description:
    Create a struct, named Student, representing the student's details, as mentioned above, and store the data of a student.
*/


#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;

struct Student{
    int age;
    string first_name;
    string last_name;
    int standard;
};

int main() {
    Student st;
    
    cin >> st.age >> st.first_name >> st.last_name >> st.standard;
    cout << st.age << " " << st.first_name << " " << st.last_name << " " << st.standard;
    
    return 0;
}