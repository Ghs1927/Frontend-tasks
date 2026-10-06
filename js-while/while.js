// Find the sum of digits in a given number.
// Example: 738 → 7 + 3 + 8 = 18
// let i=738
// let sum=0
// while(i>0){
//     let ld=i%10
//     sum=sum+ld
//     i=parseInt(i/10)
// }
// console.log(sum)

// Find the average of digits in a given number.
// Example: 624 → (6 + 2 + 4) / 3 = 4
// let i=634
// let sum = 0
// let count=0
// let avg=0
// while(i>0){
//     let ld=i%10
//     sum=sum+ld
//     count++
//     i=parseInt(i/10)
// }
// avg=sum/count
// console.log(avg)

// Find the sum of the first digit and the last digit of a given number.
// Example: 936 → 9 + 6 = 15

// let i=20002
// let ld =i%10
// let sum=0
// while(i>=10){
//     i=parseInt(i/10)
// }
// let fd=i
// sum=ld+fd
// console.log(sum)

// Find the average of digits that are divisible by 5 in a given number.
// Example: 12575 → Divisible by 5 digits: 5, 5, 5 → Average = (5 + 5 + 5) / 3 = 5
// let i=12575
// let sum=0
// let count=0
// let avg=0
// while(i>0){
//     ld=i%10
//     if(ld%5==0){
//         sum=sum+ld
//         count++
//     }
//     i=parseInt(i/10)

// }
// avg=sum/count
// console.log(avg)

// Find the difference between the largest digit and the smallest digit in a given number.
// Example: 58321 → Largest = 8, Smallest = 1 → Difference = 8 - 1 = 7

let i = 58321;
let diff = 0;
let n = 0;
let large = 0;
let small = 9;
while (i > 0) {
  ld = i % 10;
  if (ld > large) {
    large = ld;
  }
  if (ld < small) {
    small = ld;
  }
  i = parseInt(i / 10);
}
diff = large - small;
console.log(diff);
