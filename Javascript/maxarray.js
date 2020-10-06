//Given an array A, find the maximum j-i such that A[i] < A[j]
function maxIndexDif(){
    var arr = Array(9, 2, 3, 4, 5, 6, 7, 8, 18, 0);
    var maxDiff = -1;
    
    for (let i = 0; i < arr.length; i++){
        let j = arr.length - 1;
        while(j > i){
            if (arr[j] > arr[i] && maxDiff < (j - i)){
                maxDiff = j - i;
            }
            j -= 1;
        }
    }
    console.log(maxDiff);
}

//Find the max-of-min for every window size ( 1<=WS<=length(A)) for a given array A
function maxOfMinWindowSize(){
    var arr = Array(10, 20, 30, 50, 10, 70, 30);
    var n = arr.length;
    var output = Array();
    
    for (let i = 1; i < n + 1; i++){
        var maxOfMin = 0;

        for (let j = 0; j < (n - i + 1); j++){
            var min = arr[j];
            
            for (let k = 0; k < i; k++){
                if (arr[j + k] < min){
                    min = arr[j + k] 
                }        
            }

            if (min > maxOfMin){
                maxOfMin = min;
            }
        }
        output.push(maxOfMin);
    }   
    
    console.log(output);
}

maxIndexDif();
maxOfMinWindowSize();