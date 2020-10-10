// Print the N integers of the array in the reverse order, space-separated on a single line.
//Sample Input
//4
//1 4 3 2

//Sample Output

//2 3 4 1


#include <cmath>
#include <cstdio>
#include <vector>
#include <iostream>
#include <algorithm>
using namespace std;


int main() {
    int length;
    scanf("%d", &length);
    int arr[length];

    for(int i = 0; i < length; i++){
        cin >> arr[i];
    }

    int j = 0; 
    int k = length - 1;
    while(j < k)
    {
        int temp = arr[j];
        arr[j] = arr[k];
        arr[k] = temp;
        j++;
        k--;
    }

    for(int m = 0; m < length; m++)
    {
        cout << arr[m] << " ";
    }


    return 0;
}