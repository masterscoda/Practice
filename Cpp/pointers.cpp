//Pointers are used whenever a function needs to modify the content of a variable, but it does not have ownership. 
#include <stdio.h>
#include <cmath>

void update(int *a,int *b) {
    int tempA = (*a) + (*b);
    int tempB = abs((*b) - (*a));
    (*a) = tempA;
    (*b) = tempB;
}

int main() {
    int a, b;
    int *pa = &a, *pb = &b;
    
    scanf("%d %d", &a, &b);
    update(pa, pb);
    printf("%d\n%d", a, b);

    return 0;
}