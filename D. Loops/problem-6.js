//  loop ব্যবহার করে sum বের করো

let sum = 0;

for(let i = 1; i <= 10; i++) {
    sum = sum + i;
}

console.log(sum);

// short version

let sum1 = 0;
for(let i = 1; i <= 10; i++) {
    sum1 += i;
}

console.log(sum1);