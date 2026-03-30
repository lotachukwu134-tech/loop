//number 1
//writing the same task twice
console.log("Number 1")

function score(name, score){
//return(name, score)
console.log(name+ " scored "+ score+"/100")
}
score("Ada", 79)    //funtion declaration

const scores = function(name="Ada", score=90){
    console.log(name+ " scored " + score+"/100")
    
}
scores();            //function expression

//the function declaration is hoisted (can run before its called) while the function expression is not hoisted (cannot run before it is called) because the function declaration uses the function keyword while  the function expression is the function assigned to a variable.

//number 3
console.log("Assignment number 3")



//number 4
console.log(" Assignment Number 4")
const repeat  = function(fn, times){
    for(let i=1; i<=times; i++){
        fn(i)
    }
}

const sayHello = function(i){
    console.log("Hello " + i)
}
repeat(sayHello, 3)

const countNo = function(i){
    console.log("Number " + i)
}
repeat(countNo, 4)
//repeat() is a higher order function because it takes order functions as an argument and calls it(or them).


//number 5
//mini student report
console.log(" Assignment Number 5")
//name
  const addStudent = function(name="Denzzy", score=[49,60,79,90]){
 console.log("Name: "+ name)
//console.log(score)
 }
 addStudent();

 //calculating average
 const getAverage = function(score=[80,100,95,100]){
    let sum=0
    let average=0
    for(let i=0; i<score.length; i++)
        sum+= score[i]
    average=sum/score.length
    console.log("Average: "+ average)
    return average

}
//getAverage();

//determining grade
let avg =getAverage()
const getGrade = function(average){
   if(average>=90){
       console.log("Grade: "+ "A")
   }
   else if(average>=75){
       console.log("Grade: " + "B")
}
   else if(average>=60){
       console.log("Grade: "+ "C")
   }
   else {console.log("Grade: " + "F")
  }
//return avg
}
 getGrade(avg);

//getting pass or fail status
 //let =getAverage()
  const getStatus = function(average){
     if(average>=60){
        return "Status: " + "Pass"
     }
     else{
        return "Status: " + "Fail"
     }
     
 }
console.log(getStatus(avg))

//Fibonacci sequence
console.log(" Assignment Number 1 //Fibonacci sequence")

const fibonacci = function(n){
    if(n<0){
        throw new Error("n cannot be negative")
    }
    if(n===0) return 0;
    if(n===1) return 1;

    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(10))


// const getMean = function(numbers=[1,2,3,4,5]){
//     let sum=0
//     let mean=0
//     for(let i=0; i<numbers.length; i++ )
//         sum+=numbers[i]
//         mean=sum/numbers.length
//         console.log("Mean= "+ mean)
// }
// getMean([1,2,5,19,19,10]);

// const getString = function(string){
//     //mfor(let i=0; i<string.length; i++)m
//       console.log(string.length)  
// }
// getString("chinweteluagu");

// const findHighestNumb = function(numbs=[1,21,3,4,3,5,3,19,17,3]){
//     let highestNumb=0
//     for(let i=0; i<numbs.length; i++) {

//         if(numbs[i]> highestNumb){
//             highestNumb=numbs[i]
//     }

//         }
//      return highestNumb       
//     }
//     console.log(findHighestNumb());
// //mfindHighestnumb();
// //     let array=0
// //     let highestnumb=array[1]
// // for(let i=1; i<numbs.length; i++){
// //     if (i>array[1])//{
// //       // let i=array[1]
// //     //}
// //         highestnumb=i
// //      return highestnumb
// // }

// // findHighestnumb();m
