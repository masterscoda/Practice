function minimumSwaps() {
    var arr = [2, 4, 3, 1, 5];
    const iterator = arr.keys();
    var minSwaps = 0;
    for(const x of iterator){
        if ((x + 1) != arr[x]){
            let index = arr.indexOf((x + 1));
            let temp = arr[index];
            arr[index] = arr[x];
            arr[x] = temp;
            minSwaps++;
        }
    }
    console.log(minSwaps);
}