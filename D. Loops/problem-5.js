

// 1–100 এর মধ্যে 3 দিয়ে divisible সংখ্যা বের করো


for(let i = 1; i <= 100; i++) {
    if(i % 3 === 0) {
        console.log(i);
    }
}


// smart version

for(let i = 3; i <= 100; i += 3) {
    console.log(i);
}