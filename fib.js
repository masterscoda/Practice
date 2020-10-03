function fib(){
    var a = 0, b = 1, temp;
    var sum = 0;
    while(b <= 4000000){
        temp = a + b;
        a = b;
        b = temp;
        if(a % 2 != 0){
            sum += a;
        }
    }
    console.log(sum);
}
fib();