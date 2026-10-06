// Print all numbers from 10 to 150 that are divisible by both 3 and 5.
// let n=150
// for(let i=10;i<=n;i++){
//     if(i%3==0 && i%5==0){
//         console.log(i)
//     }
// }

// Count how many numbers from 200 down to 50 are divisible by 7.
let x = 50;
let count = 0;
for (let i = 200; i >= 50; i--) {
  if (i % 7 == 0) {
    count = count + 1;
  }
}
console.log("count is", count);

// Print numbers from 120 down to 20 that are not divisible by 5.
// let num=20
// for(let i=120;i>=20;i--){
//     if(i%5!=0){
//         console.log(i)
//     }
// }

// Find the average of all even numbers in the range from 10 to 100.
let sum = 0;
let avg = 0;
let coun = 0;
for (let i = 10; i <= 100; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
    coun = coun + 1;
  }
}
avg = sum / coun;
console.log("average is", avg);
