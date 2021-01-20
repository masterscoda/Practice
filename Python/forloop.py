"""
    Name: ifelse.py
    Author: Scott Bossard
    Date: 01/19/2020

    Description:
    Basic for loop. For all non-negative integers i < n, print i^2. 
"""


if __name__ == '__main__':
    n = int(input())
    for x in range(n):
        square = x ** 2
        print(square)