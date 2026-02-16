//  তিনটি সংখ্যার মধ্যে সবচেয়ে বড়টা বের করো


let num1 = 100;
let num2 = 150;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 is a largest number');
} else if(num2 > num1 && num2 > num3) {
    console.log('num2 is a largest number');
} else {
    console.log('num3 is largest number');
}


// short cat

let largest = Math.max(num1, num2, num3);
console.log(largest +  ' is a largest number')