function prime10001(){
    var numOfPrimesFound = 1;
    var num = 2;
    var primeNumber = 2;
    while (numOfPrimesFound < 10001){
        num += 1;
        if(isPrime(num)){
            numOfPrimesFound += 1;
            primeNumber = num;
        }
    }
    console.log(numOfPrimesFound);
    console.log(primeNumber);
}

function isPrime(num){
    for(let i = 2; i <= num/2; i++){
        if(num % i === 0){
           return false;
        }
     };
     return true;
}
prime10001();