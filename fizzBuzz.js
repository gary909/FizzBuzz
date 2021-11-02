var myArr = [];
var myNum = 1;

function fizzBuzz(num){
    for (var i = 0; i < num; i++){
        if (myNum % 3 === 0 && myNum % 5 === 0) {
            myArr.push("fizzBuzz");
            myNum += 1;
        } else if (myNum % 3 === 0) {
            myArr.push("fizz");
            myNum += 1;
        } else if (myNum % 5 === 0) {
            myArr.push("buzz");
            myNum += 1;
        } else {
            myArr.push(myNum);
            myNum += 1;
        }
    }
    return myArr;
}

console.log(fizzBuzz(20));

function whosPaying(names) {
    var random = Math.floor(Math.random() * names.length);
     return names[random];
}

console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));