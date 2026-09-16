//normal function + array method
console.log("Number 1")
const arr=[1,2,3,4,5,6,7,8,9,10]
function getEvenNumbers(arr){
return arr.filter((num)=>num%2==0)
}
console.log(getEvenNumbers(arr))

//arrow function + string method
console.log("number 2")

const capitalizeWord=(word) =>{
return word.toUpperCase()
}
console.log(capitalizeWord("javascript"))

//normal function + array method
console.log("number 3")

function sumNumbers(arr=[2,4,6,8,10]){
return arr.reduce((sum,num)=>sum+num)
}
console.log(sumNumbers())

//arrow function+ array method
console.log("number 4")

const cubeNumbers=(arr2=[1,2,3]) =>{
return arr2.map((num)=> num**3)
}
console.log(cubeNumbers())

//normal function + string method
console.log("number 5")

//word="javascript"
function checkWord(word="javascript"){
return word.includes("as")
}
console.log(checkWord())

//arrow function + global function
console.log("number 6")

const convertToNumber=() =>{
    return parseInt("45")
}
console.log(convertToNumber())

//normal function + array method inside function
console.log("number 7")
function findNamesLongerThanFour(names=["Ada","Chinedu","Mary","Emeka"]){
return names.filter((nam)=>nam.length>4)
}
console.log(findNamesLongerThanFour())

//arrow function + string method
console.log("number 8")
const reverseText=(texts)=>{
return texts.split("").reverse().join("")
}
console.log(reverseText("hello"))

//normal function + global function + array method
console.log("number 9")
function roundNumbers(){
    return Math.round(x)
}
console.log(roundNumbers())

//arrow function + arrow method + condition
console.log("number 10")
