let userN = parseFloat(prompt('Enter any number (from 3 to inf)'));

let pre = 1, prePrev = 1, next;
for (let i = 3; i <= userN; i++) {
  next = pre + prePrev;
  prePrev = pre;
  pre = next;
  document.write(next);
  document.write('<br>');
}