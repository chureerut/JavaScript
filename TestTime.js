// function summation1(n) {
//     total = 0;
//      for (index = 0; index <= n; index++) {
//         total += index;        
//      }
//      return total;
// }

// n = 3000_000_000;
// console.time();
// summation1(n);
// console.timeEnd();

function summation2(n) { 
    return (n*(n+1)) /2 ;
}

n = 3000_000_000;
console.time();
summation2(n);
console.timeEnd();

//console.log("Test");