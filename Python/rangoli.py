"""
    Name: rangoli.py
    Author: Scott Bossard
    Date: 01/24/2020

    Description:
        You are given an integer,N . Your task is to print an alphabet rangoli of size .N (Rangoli is a form of Indian folk art based on creation of patterns.)

    Problem Source: Hackerrank
        https://www.hackerrank.com/challenges/alphabet-rangoli/problem
"""

def print_rangoli(size):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    for i in range(size - 1, -size, -1):
        temp = '-'.join(alphabet[size - 1:abs(i):-1] + alphabet[abs(i):size])
        print(temp.center(4 * size - 3,'-'))
        

if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)