// Leap year চেক করার প্রোগ্রাম লেখো

let year = 2051;

if(( year % 4 === 0 && year % 100 != 0) || (year % 400 == 0)){
    console.log('leap year')
} else{
    console.log('Not a  leap year')
}