// array থেকে even সংখ্যাগুলো বের করো


// let numbers = [10, 15, 20, 25, 30, 33, 18, 13];

// for(const number of numbers) {
//      if(number % 2 === 0) {
//         console.log(number);
//      } 
// }





// যদি even number গুলো নতুন array তে রাখতে চাই?

let numbers = [ 12, 34, 54, 35, 67, 95, 45,14, 76];
const evenNumber = [];

for(const number of numbers) {
    if(number % 2 === 0) {
        evenNumber.push(number);
    }
}

console.log(evenNumber);