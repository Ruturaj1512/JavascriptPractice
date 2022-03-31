//  Date :1/2/2022


function function1(){
    function innerfunc(param){
        console.log("inside inner function")

        //undefined
        innerfunc()
    }
}


function fun1(){
    const numbers = [10,20,30,40,50]

    // for loop
    for(let index = 0; index< numbers.length ; index++)
    console.log(`value at ${index} = ${numbers[index]}`)
}

fun1()

function function6(){
    const numbers = [1,2,3,4,5]

    const sq = numbers.map((value) => value** 2)
}


function fun1(){

//array of numbers

const nums=[10,20,30]
console.log(nums)

//Array of strings
const names=['a','b','v']
console.log(names)

//Mixed array

const mix=['a','b','v',10,'k']
console.log(mix)

//append a new value at the end
nums.push(60)
console.log(nums)

//remove the last value
nums.pop()
console.log(nums)

//length of array

console.log(nums.length)

//removing in between values
nums.splice(2,1)
console.log(nums)

//adding value in between value 39 at 2nd position
nums.splice(2,0,39)
console.log(nums)

//present in string format
console.log(nums.join('-'))

//check if a number exists in an array or not
//returns index if exists else returns -1
console.log(`${nums.indexOf(20)}`)
console.log(`${nums.indexOf(200)}`) //index will be printed as -1 as it is not present in the collection

}

fun1()


function f1(){
    const outervariable ="This is outer function"

    function innerfunc(param){
        console.log(`Inside inner function`)
        //Inner function can access outer functions variables
        console.log(`outervar=${outervariable}`)
        console.log(`param=${param}, type=${typeof param}`)
        param(10,20)
    }

    function innerfunc2()
    {
        console.log(`inside innerfunc2f`)
    }

    //passing function name a parameter
    innerfunc(innerfunc2)

    function add(p1,p2)
    {
        console.log(`p1+p2=${p1+p2}`)
    }
    innerfunc(add)




    function sub(p1,p2)
    {
        console.log(`p1-p2=${p1-p2}`)
    }
    innerfunc(sub)

    //arrow function
    const divide =(p1,p2)=>{
        console.log(`p1/p2=${p1/p2}`)
    }

    innerfunc(divide)

}

function fun1(){

//array of numbers

const nums=[10,20,30]
console.log(nums)

//Array of strings
const names=['a','b','v']
console.log(names)

//Mixed array

const mix=['a','b','v',10,'k']
console.log(mix)

//append a new value at the end
nums.push(60)
console.log(nums)

//remove the last value
nums.pop()
console.log(nums)

//length of array

console.log(nums.length)

//removing in between values
nums.splice(2,1)
console.log(nums)

//adding value in between value 39 at 2nd position
nums.splice(2,0,39)
console.log(nums)

//present in string format
console.log(nums.join('-'))

//check if a number exists in an array or not
//returns index if exists else returns -1
console.log(`${nums.indexOf(20)}`)
console.log(`${nums.indexOf(200)}`) //index will be printed as -1 as it is not present in the collection

}

fun1()


function f1(){
    const outervariable ="This is outer function"

    function innerfunc(param){
        console.log(`Inside inner function`)
        //Inner function can access outer functions variables
        console.log(`outervar=${outervariable}`)
        console.log(`param=${param}, type=${typeof param}`)
        param(10,20)
    }

    function innerfunc2()
    {
        console.log(`inside innerfunc2f`)
    }

    //passing function name a parameter
    innerfunc(innerfunc2)

    function add(p1,p2)
    {
        console.log(`p1+p2=${p1+p2}`)
    }
    innerfunc(add)




    function sub(p1,p2)
    {
        console.log(`p1-p2=${p1-p2}`)
    }
    innerfunc(sub)

    //arrow function
    const divide =(p1,p2)=>{
        console.log(`p1/p2=${p1/p2}`)
    }

    innerfunc(divide)

}
