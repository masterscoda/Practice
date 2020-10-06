function merge(){
    var arr1 = Array(61,42,13,2,55,24,73,91,88,9);
    var arr2 = Array(100,22,31,25,57,49,3,1,89,49);
    var merge = arr1.concat(arr2);
    merge.sort((a, b) => a - b);
    console.log(merge);
}

merge();