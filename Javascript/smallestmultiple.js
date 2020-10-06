function small(){
    var multiples = Array.from(Array(21), (v, i) => i).filter(i => i > 0);
    console.log(multiples.length);

    for (var i = 1; i < 1000000; i++){
        multiples.forEach(m => {
            if(i % m == 0){
                
            }
        });
    }
}

small();