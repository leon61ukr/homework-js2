let userN = parseFloat(prompt('Enter any number'));

//1st working 100fib
function prn(message) {
    document.write(message + '<br>');
}

let pre = 1, prePrev = 1, next = 0;
for (let i = 3; i <= userN; i++) {
  next = pre + prePrev;
  prePrev = pre;
  pre = next;
  document.write(next);
  document.write('<br>');
}
