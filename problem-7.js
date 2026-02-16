// array reverse করো

let numbers = [24, 56, 46, 34, 26, 44, 65, 92];

let reverse = [];

for(let i = numbers.length - 1; i >=0; i--) {
    reverse.push(numbers[i]);
}

console.log(reverse);



// Method 2 (Shortcut — Built-in Method)
  numbers = [24, 56, 46, 34, 26, 44, 65, 92];

  numbers.reverse();
  console.log(numbers);