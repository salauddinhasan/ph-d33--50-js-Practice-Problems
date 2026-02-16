// array এর মধ্যে largest number বের করো

let numbers = [23, 56, 76, 34, 56, 44, 55, 97];

  let largest = [0];

  for(const number of numbers) {
    if(number > largest) {
        largest = number;
    }
  }


  console.log(largest);