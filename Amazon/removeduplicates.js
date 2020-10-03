function removedup(){
    var arr = Array(1,2,3,2,5,4,3,1,8,9);

    let uniqueArr = [];
    arr.forEach((x) => {
        if (!uniqueArr.includes(x)) {
            uniqueArr.push(x);
        }
    });
    console.log(uniqueArr);
}

removedup();