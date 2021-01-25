"""
    Name: lists.py
    Author: Scott Bossard
    Date: 01/23/2020

    Description:
    Go through different list methods.
"""

if __name__ == '__main__':
    N = int(input())
    theList = []
    for _ in range(N):
        command, *line = input().split()
        values = list(map(int, line))
        if(command == "print"):
            print(theList)
        elif(command == "insert"):
            theList.insert(values[0], values[1])
        elif(command == "remove"):
            theList.remove(values[0])
        elif(command == "append"):
            theList.append(values[0])
        elif(command == "sort"):
            theList.sort()
        elif(command == "pop"):
            theList.pop()
        elif(command == "reverse"):
            theList.reverse()