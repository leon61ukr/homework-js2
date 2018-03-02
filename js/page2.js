// const userN = parseFloat(prompt('Enter any number'));

// for (let i = 1; i > 0; i-=1) {
//     if (i % 2 !== 0) {
//         continue;
//     } 
//     document.write(i);
//     document.write('<br>');
// }  


function fibonacci(num){
  var a = 1, b = 0, temp;

  while (num >= 1){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}
document.write(fibonacci);