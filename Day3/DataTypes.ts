//Number
let age:number = 32
let price:number = 32.33
console.log("Age: "+ age, typeof age)
console.log("Price "+price, typeof price)
//String

let fName: string = 'Anil'
let lName: string = 'Simha'

console.log('My FullName is: '+fName+" "+lName)

console.log(`My fullname is ${fName} ${lName}`)

//Boolean

let isStudent:Boolean = true
let isHavingJob: Boolean = false

console.log(isStudent,'He is student')

//null , undefined

let emptyValue:null  = null
let undefinedValue:undefined = undefined

emptyValue = 11
undefinedValue = 13

console.log(emptyValue, undefinedValue)

//Any

let PANcard: any = 'AYTGH7897F'
PANcard = 1217494
PANcard = true

console.log(PANcard, 'PANCard',typeof PANcard)

//Union

let id:number | string = 'Anil'
id = 1234
console.log(id,'id', typeof id)

//function

function sum(a:number,b:number):void{
    console.log(a+b)
}
sum(1,2)