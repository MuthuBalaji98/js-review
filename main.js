// number of vowels in a string
const str=prompt("Enter a string");
var length=str.length;
console.log(length);
let count=0;
for(let i=0; i<length; i++) {
    if(str[i]=='a'|| str[i]=='e'|| str[i]=='i' || str[i]=='o' || str[i]=='u'){
        count++;}

}
console.log(count);

// sum of digit number

var value=prompt("Enter a number");
    sum = 0;
 m= 0;

while (value) {
    m = value % 10;
    sum += m;
    value = (value - m) / 10;
}

console.log(sum);

// reverse a number in words

let n=prompt("Enter a number:");
let rem;
while (n>0){
    rem=n%10;
    switch(rem){
        case 0: console.log("zero");break;
        case 1: console.log("one");break;
        case 2: console.log("two");break;
        case 3: console.log("three");break;
        case 4: console.log("four");break;
        case 5: console.log("five");break;
        case 6: console.log("six");break;
        case 7: console.log("seven");break;
        case 8: console.log("eight");break;
        case 9: console.log("nine");break;
    }
    n=(n-rem)/10;
}