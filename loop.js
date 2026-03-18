// for(let i=1; i<=30; i++){
//     console.log(i)
// }

//no.1
let sum=0
for(let i=1;i<=30;i++){
    if(i%3==0)
        sum+=i
}
console.log(sum)

//no.2
let count=0
for(let i=1;i<=50;i++){
    if(i%2==0)
        count++
}
console.log(count)

//no.3
for(let i=20; i>=1;i--){
    if(i%4 !==0)
        console.log(i)
}

//no.4
let size=5;
for(let i=1; i<=size; i++){
    let row=" "
    for(let k=1; k<=i; k++){
        row += k+" "
    }
    console.log(row)
}

//no.5
let array=[4, 10, 2, 8]