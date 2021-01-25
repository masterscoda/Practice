"""
    Name: findstring.py
    Author: Scott Bossard
    Date: 01/24/2020

    Description:
        In this challenge, the user enters a string and a substring. You have to print the number of times that the substring occurs in the given string. String traversal will take place from left to right, not from right to left. 

    Problem Source: Hackerrank
        https://www.hackerrank.com/challenges/find-a-string/problem
"""



def count_substring(string, sub_string):
    startIndex = 0
    count = 0
    for i in range(len(string)):
        k = string.find(sub_string, startIndex)
        if(k != -1):
            startIndex = k + 1
            count += 1
            k = 0
    return count

if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()
    
    count = count_substring(string, sub_string)
    print(count)