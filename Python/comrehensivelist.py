"""
    Name: comprehensivelist.py
    Author: Scott Bossard
    Date: 01/20/2020

    Description:
    . Print a list of all possible coordinates given by (i,j,k) on a 3D grid where the sum of is not equal to n. Here, i <= x; j <= y; k <= z. Please use list comprehensions rather than multiple loops, as a learning exercise. 
"""

if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())
    
    theList = ([[i,j,k] for i in range(0,x+1) for j in range(0,y+1) for k in range(0,z+1) if i + j + k != n ])
    
    print(theList)