// array থেকে duplicate remove করো


// ✅ Method 2 (Loop দিয়ে — Interview Style)

let numbers = [10, 20, 30, 20, 40, 10, 50];

let unique = [];

for(const number of numbers) {
    if(!unique.includes(number)) {
        unique.push(number);
    }
}


console.log(unique);




// method 2 Set ব্যবহার করে)
// let numbers = [10, 20, 30, 20, 40, 10, 50];


// let unique = [...new Set(numbers)];

// console.log(unique);