// var myArr = [];
// var myNum = 1;

// function fizzBuzz(num){
//     for (var i = 0; i < num; i++){
//         if (myNum % 3 === 0 && myNum % 5 === 0) {
//             myArr.push("fizzBuzz");
//             myNum += 1;
//         } else if (myNum % 3 === 0) {
//             myArr.push("fizz");
//             myNum += 1;
//         } else if (myNum % 5 === 0) {
//             myArr.push("buzz");
//             myNum += 1;
//         } else {
//             myArr.push(myNum);
//             myNum += 1;
//         }
//     }
//     return myArr;
// }

// console.log(fizzBuzz(20));

// function whosPaying(names) {
//     var random = Math.floor(Math.random() * names.length);
//      return names[random];
// }

// console.log(whosPaying(["Angela", "Ben", "Jenny", "Michael", "Chloe"]));

var beerBot = 99;
var beerBotAdd = 98;

function beer(bottles){
    for (var i = 0; i < bottles; i++){
        if (beerBot == 1){
            console.log(beerBot + " bottle of beer on the wall, " + beerBot + " bottle of beer. Take 1 down, pass it around, " + beerBotAdd + " bottle of beer on the wall.");
            beerBot = beerBot - 1;
            beerBotAdd = beerBotAdd - 1;
        } else if (beerBot == 0) {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
            beerBot = beerBot - 1;
            beerBotAdd = beerBotAdd - 1;  
        } else {
            console.log(beerBot + " bottles of beer on the wall, " + beerBot + " bottles of beer. Take 1 down, pass it around, " + beerBotAdd + " bottles of beer on the wall.");
            beerBot = beerBot - 1;
            beerBotAdd = beerBotAdd - 1;
        }
    }
}

console.log(beer(100));