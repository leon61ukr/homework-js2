let userN = parseFloat(prompt('Enter any number'));
let i;

function countFib {
  if (userN === 0) {
    return (x = 0);
  } 
  else if (userN === 1) {
    return (x = 1);
  } 
  else if (userN > 2) (let i = 3; i <= userN; i++){
    countFib = pre + prePrev;
    prePrev = pre;
    pre = countFib;
    document.write(countFib);
    return (countFib);
  }  
}
document.write(countFib);
