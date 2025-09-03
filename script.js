//Q2.IIFE

(function(){
    console.log("hello iam IIFE")
})()


//Q1.CURRING FUNCTION 

function add3(a){
    return function(b){
        return function(c){
            console.log(a+b+c)
        }
    }
}
add3(22)(27)(25)

//Q3.GEN FUNCTION

function*gen(){
    yield 28;
    yield 12;
    yield 23;
}
let genfun=gen();
console.log(genfun.next());
console.log(genfun.next());
console.log(genfun.next());
console.log(genfun.next());

//Q4.UNCURRIED FUNCTION

function uncurr(a,b,c){
    return a+b+c;
}
console.log(uncurr(11,12,13))

//Q5.GAPS IN ARRAY

let fruits=["apple",,"grapes","banana"]
    console.log(fruits[1]) // undefined 


    let fru=["apple","","grapes","banana"]
    console.log(fru[1]) // can fill the gap

//Q6.HOMOGENEOUSE

// it stores same data

let fruit=["apple","mango","banana","garpes"]
console.log(fruit)

//HETEROGENEOUS

//it stored different data type

let fruitt=["apple","banana",2,3,{mango:"mango"}]
console.log(fruitt)

//Q.7

var userprofile={
    Name:"Jeeve",
    Age :23,
    Qualification:"B.E",
   levelOfLaunguage:{
    Tamil:"Good",
    English:"Good",
   },
   Skill:"Front end "
}
console.log(userprofile.levelOfLaunguage.Tamil)

//Q.8

//FOR OF

let arr1=[1,2,3,4,5];
let arr2="Jeeve";
for(let one of arr1){
    console.log(one)
}
for(let two in arr2){
    console.log(arr2[two])
}

//Q.9 What happens when you call storeGen.next() after all values in the genFun generator have been yielded?


function*gen(){
    yield 28;
    yield 12;
    yield 23;
}
let genn=gen();
console.log(genn.next());//false
console.log(genn.next());//false
console.log(genn.next());//false
console.log(genn.next());//here it returns true bcoz the value completed

//Q.10 

var user={
    name:"jeeve",
    completedtraining:function(training){
        return user.name + training;
    }
}

 console.log(user.completedtraining("javascript"))
 console.log(user.completedtraining("javascript"))

