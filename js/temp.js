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