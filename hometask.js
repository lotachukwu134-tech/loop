const processUser={
    nname:"Ada",
    skills:["js","node"]
}
 const {nname}=processUser
console.log(nname)

const processUser2={
    skills2:[ ...processUser.skills,
    "React"]

}
 console.log(processUser2.skills2)
 console.log(nname+" knows "+ processUser2.skills2)

 //number two 
 console.log("Number two")
const multiplyNumbers=(multiplier, ...numbs)=>{
    const accNumbers=[...numbs]
    return accNumbers.map(num=>num * multiplier)

}
console.log(multiplyNumbers(2,3,4,5))

//number three
console.log("number three")

const student={
    names:"John",
    score:[70,80],
    details:{
        class:"ss3"
    }
}

const processStudent={
    const: {names,score,details}=student,

    score2:[...student.score, 90]
    
}
console.log(names,score,details.class)
console.log(processStudent.score2)
console.log( names+" in "+details.class+" scored "+processStudent.score2)

//number four
console.log("number four")

const numbers=[1,2,3,4,5]
const processNumbers = (first,numbers,...rest)=>{
    const newNumbers=[first,...rest]
    return newNumbers.map=(num=>num*numbers)
}

console.log(processNumbers(1,2,3,4,5))

//number five
console.log("Number five")
const user={
name:"chioma",
age:25,
role:"admin"
}
const updateUser=({name,...remain})=>{
    //const {name,...remain}=newUser
    return {userName:name,...remain}
    
    // const newUser={userName,age,...remain}
    // return newUser
}
console.log(updateUser(user))

//number six
console.log("NUMBER SIX")
const user3={
    name:"Adaa",
    adress:{
        city:"lagos"
    }
}
const cloneUser=(user3)=>{
const nwUser={
    ...user3, adress:{
        ...user3.adress,city:"Abuja"
    }
}
return nwUser
}
console.log(cloneUser(user3))

//number seven
console.log("NUMBER SEVEN")
const user4=[
    {
        name:"ada",
        skilss:["Js"]
    },
    {
        name:"sam",
        skilss:["Python"]
    }
]
const getUser=(user4)=>{
const [firstt,...restt]=user4
const newSkilss={
    ...firstt,
    skilss:[...firstt.skilss, "React"]
}
return{firstt:newSkilss,...restt}
}
console.log(getUser(user4))

//number 8
console.log("NUMBER EIGHT")
const sumAll=(...numbers)=>{
    const numBer=[...numbers]
    const [firrst,...restno]=numBer
    const sum=restno.reduce((sum,num)=> sum+num,firrst)
    return sum
}
console.log(sumAll(5,10,15))

//number nine
console.log("NUMBER NINE")
const data={
    user5:{
        info:{
            nname:"Ada"

        },
        skill:["js"]
    }
}
const processData=()=>{
    const{
user5:{
    info:{nname},
    skill
}
    }=data

    const updatedSkill=[...skill,"Node"]
    return {
        namme:nname,
        skill:updatedSkill
    }
}
console.log(processData())

//number ten
console.log("NUMBER TEN")

const records=[
    {
        naame:"ada",
        scores:[10,20]
    },
    {
        naame:"sam",
        scores:[30,40]
    }
]
const processRecords=()=>{
    const [first,...rst]=records
    const {naame,scores}=first
    const combinedScores=[
        ...scores,
        ...rst.flatMap(records => records.scores)
    ]
    return {naame,scores:combinedScores}
}
console.log(processRecords())