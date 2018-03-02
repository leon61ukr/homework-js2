let userN = parseFloat(prompt('Enter any number (xxx)'));

function prn(message) {
    document.write(message + '<br>');
}

let cars = ['0', '1'];
cars[2] = '1';
cars.push('2');
prn('Total:' + cars.length);

for (let i = 0; i < cars.length; i++) {
    prn(cars[i]);
}

function fib(userN){
    let fib = 1;
	return fib(userN-1) + fib(userN-2);
}

let nums = [0, 1, 1];
for (let i = 0; i < 100; i++) {
	nums.push('nums[userN-1]+nums[userN]');
}

prn('Total:' + nums.length);
prn(nums);


let fib = ["1", "1"];
let temp = fib.length;
prn(fib.length)
fib.push();

var index;
for (index = 0; index < userN.length; ++index) {
    prn(userN[index]);
}



// const userN = parseFloat(prompt('Enter any number'));

// for (let i = 1; i > 0; i-=1) {
//     if (i % 2 !== 0) {
//         continue;
//     } 
//     document.write(i);
//     document.write('<br>');
// }  


// function fibonacci(num){
//   var a = 1, b = 0, temp;

//   while (num >= 1){
//     temp = a;
//     a = a + b;
//     b = temp;
//     num--;
//   }

//   return b;
// }
// document.write(fibonacci);

// let pre = 1, prePrev = 1, next = 0;
// for (let i = 3; i <= userN; i++) {
//   next = pre + prePrev;
//   prePrev = pre;
//   pre = next;
//   document.write(next);
//   document.write('<br>');
// }