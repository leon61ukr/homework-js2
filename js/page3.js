let fibN = [], i;
let userN = parseFloat(prompt('Enter any number (from 2 to inf)'));

fibN[0] = 0;
fibN[1] = 1;
for(i=2; i<=userN; i++) {
    fibN[i] = fibN[i-2] + fibN[i-1];
    document.write(fibN[i] + '<br>');
}