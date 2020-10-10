/*
    Name: class.cpp
    Author: Scott Bossard
    Date: 10/8/2020

    Description:
    Create a class, named Student, representing the student's details, as mentioned above, and store the data of a student. Create setter and getter functions for each element; that is, the class should at least have following functions:

    -get_age, set_age
    -get_first_name, set_first_name
    -get_last_name, set_last_name
    -get_standard, set_standard

    Also, you create another method to_string() which returns the string consisting of the above elements, separated by a comma(,). You can refer to stringstream for this.
*/

#include <iostream>
#include <sstream>
using namespace std;

class Student{
    private: 
        int age;
        string firstname;
        string lastname;
        int standard;

    public:
        void set_age(int a) {
            age = a;
        }
        int get_age() {
            return age;
        }

        void set_standard(int s) {
            standard = s;
        }
        int get_standard() {
            return standard;
        }

        void set_first_name(string f) {
            firstname = f;
        }
        string get_first_name() {
            return firstname;
        }

        void set_last_name(string l) {
            lastname = l;
        }
        string get_last_name() {
            return lastname;
        }

        string to_string(){
            string result = std::to_string(age) + "," + firstname + "," + lastname + "," + std::to_string(standard);
            return result;
        }
};

int main() {
    int age, standard;
    string first_name, last_name;
    
    cin >> age >> first_name >> last_name >> standard;
    
    Student st;
    st.set_age(age);
    st.set_standard(standard);
    st.set_first_name(first_name);
    st.set_last_name(last_name);
    
    cout << st.get_age() << "\n";
    cout << st.get_last_name() << ", " << st.get_first_name() << "\n";
    cout << st.get_standard() << "\n";
    cout << "\n";
    cout << st.to_string();
    
    return 0;
}