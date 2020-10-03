function prime(){
    var number = 600851475143;

    for(var counter = 2; counter <= Math.sqrt(number); counter++){
        if(number % counter == 0)
        {
            number = number / counter;
            counter--;
        }
    }

    if (number >= 2){
        console.log("Largest Prime Factor :"+ number);
    }
}

prime();