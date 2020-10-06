function sumsquare(){
    var natural = Array.from(Array(101), (v,i) => i).filter(i => i > 0);
    let squares = natural.map( x => x ** 2);

    var squaresSum = 0;
    var naturalSum = 0;
    var difference = 0;
    squares.forEach(x => {
        squaresSum += x;
    });

    natural.forEach(x => {
        naturalSum += x;
    });

    difference = (naturalSum ** 2) - squaresSum;
    console.log(difference);
}

sumsquare();