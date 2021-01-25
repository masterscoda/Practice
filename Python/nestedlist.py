"""
    Name: nestedlists.py
    Author: Scott Bossard
    Date: 01/24/2020

    Description:
        Given the names and grades for each student in a class N of students, store them in a nested list and print the name(s) of any student(s) having the second lowest grade.

    Problem Source: Hackerrank
        https://www.hackerrank.com/challenges/nested-list/problem
"""

if __name__ == '__main__':
    theList = {}
    for _ in range(int(input())):
        name = input()
        score = float(input())
        theList[name] = score
    values = theList.values()
    second = sorted(list(set(values)))[1]
    i = 0
    while second == sorted(list(set(values)))[i]:
        second = sorted(list(set(values)))[i+1]
        i = i + 1
    secondLowest = [] 
    for key,value in theList.items():  
        if value == second: 
            secondLowest.append(key) 
        secondLowest.sort() 
    for name in secondLowest: 
        print(name)  