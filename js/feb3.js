/*
function function1() {
    console.log('Inside fun1')
    const num1 = 123456789
    const num2 = 2457329085
    console.log(`Multiplication = ${num1 * num2}`)
    
}


function function2() {
    console.log('Inside fun2')
    const num1 = 6667656789
    const num2 = 2457329085
    console.log(`Division = ${num1 / num2}`)
    
}



function1()

function2()

*/

//promises

function function1(params) {
    const promise = new Promise((resolve , reject) => {
        console.log("processing")

        setTimeout(()=>{
            resolve()
        },5000)
    })

    promise.then(() =>{
        console.log("successfull")

    })

    promise.catch(() =>{
        console.log('reject')
    })
    
}

function1()
