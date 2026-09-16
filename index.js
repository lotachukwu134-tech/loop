console.log("Hello world");

//const numb=[1,2,3,4,5]
const doublenum =(num2) => {

    return  num2*2
    
}
console.log(doublenum(10))

function multiply(a,b){
 return   a*b
}
console.log(multiply(5,2))

let x=5
function multiple(){
return 2*x
}
console.log(multiple())

greet()
function greet(name="Dave"){
console.log(name)
}

// console.log(x)
// var x=5

const add =(a,b)=>{
  return  a+b
}
  console.log(add(1,2))

 // console.log(isNaN("dave"))
 const value = isNaN("dave")
 console.log(value)

 console.log(parseInt("10") + parseInt("3"))

 const valu = parseInt("90")
 console.log(valu)

 const fruits=["apple", "mango"]
 console.log(typeof(fruits))

 const person={
    name:"john",
    age:20,
    greet() {
        setTimeout(() => {
            console.log(  this.name, "you are", this.age, "years old")
        }, 3000);
    }
 }
 person.greet()
let word="massive "
//charat shows the character at that index
 console.log(word.charAt(3))
 //concat adds (doesnt mutate) to the parameter
 console.log(word.concat("felony!!"))
 //includes checks if the argument is included in the word
 console.log(word.includes("ass"))
 //slice cuts out from the starting index to the end you give
 console.log(word.slice(2,5))
 console.log(word.substring(2,5))
 console.log(word.split("i"))
 console.log(word.trim().length)
 console.log(word.toUpperCase())
 console.log(word.toLowerCase())
 
 const array=[1,2,3,4,5]
 array.push(6,7)
 array.pop()
 array.reverse()
 array.splice(2,1,8)
 console.log(array)

 const arr=[1,2,3,4,5]
 const newArr = arr.find(num=>num>4)
 console.log(newArr)
 
const numbers=[2,4,6,8]

//array destructurin'
const arr3=[1,2,3,4,5,6]
const [,,,,num4]=arr3
console.log(num4)

//object destructurin'
const user={
    name:"chisom",
    age:26,
    country:"canada"
}
const {country,name,age}=user
console.log(country,name,age)

//spread operator
const a=[1,2]
const b=[3,4]
const c=[...a,...b]
console.log(c)
//example 2
const newUser={
    height:59,...user
}
console.log(newUser)


//rest operator
function sum(...nums){
console.log(nums)
//return nums.reduce((sum,num)=>sum + num)
}
sum(1,2,3,4)
//console.log(sum(2,3,4),"sum")

const namee="dan"
console.log(`hello ${namee}`)

//practice questions: spread+ destructurin'
const arr4=[2,4,6]
const newArr4=[1,...arr4]
console.log(newArr4)
const [val1,val2]=newArr4
console.log(val1,val2)

//rest + destructurin'
const anArr=[10,20,30,40]
const [first,second,...rest]=anArr
console.log(first,second,rest)

//object spread + destructurin'
const phone={
    brand:"Android",
    colour: "black"
}
const updated={
    ...phone,
    storage:"124gb",
    size:"6.7in"
}
const {brand,colour}=updated
console.log(updated)

const {storage,size="6.6in"}=updated
console.log(size)

//nested objects + spread

const user2={
    name:"Dolly",
    skills:["Kidnapper","Hitman"]
}
const updateduser2={
    ...user2,
    skills2:[...user2.skills, "Theif"]
}
console.log(updateduser2.skills2)

//function + rest
const useer={
    naym:"Larry",
    agee:50,
    city:"florida"
}
function display({ naym,agee, ...oothers}){
console.log(naym,agee,oothers)
}
display(useer)