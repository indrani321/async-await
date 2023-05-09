console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve('ticket'); 
    },3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t)=>{
    console.log("wife: I have tics");
    console.log("husband: we should go in");
    console.log("wife: no i am hungry");
    return new Promise((resolve,reject)=>resolve(`${t} popcorn`))
});

const getbutter =getPopcorn.then((t)=>{
    console.log("husband: I got some popcorn");
    console.log("husband: we should go in");
    console.log("wife: I need butter on my popcorn");
    return new Promise((resolve,reject)=>resolve(`${t} butter`))

});

const getColddrinks =getbutter.then((t)=>{
console.log(`husband: here is your cold drinks. anything else?`);
console.log("wife: no lets go we are getting late")
console.log("husband:thank you for the reminder");

        return new Promise((resolve,reject)=>resolve(`${t} colddrinks`))
});
getColddrinks.then((t)=>console.log(t)); 

console.log('person4: shows ticket');
console.log('person5: shows ticket'); 

console.log('person1: shows ticket');
console.log('person2: shows ticket');

const preMovie = async()=>{
const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(()=>resolve('ticket'),3000);
});
const getPopcorn =new Promise((resolve,reject)=>resolve(`popcorn`));
const getbutter= new Promise((resolve,reject)=>resolve(`butter`));
const getColddrinks =new Promise((resolve,reject)=>resolve(`colddrinks`));
let ticket = await promiseWifeBringingTicks;

console.log(`wife: I have the ${ticket}`);
console.log("husband: we should go in");
console.log("wife: no i am hungry");

let popcorn = await getPopcorn;

console.log(`husband: I got some ${popcorn}`);
console.log("husband: we should go in");
console.log("wife: I need butter on my popcorn");

let butter= await getbutter;
console.log(`husband:I got some ${butter} on popcorn`);
console.log("husband: anything else darling");
console.log("wife: lets have some cold drinks");

let colddrinks= await getColddrinks;
console.log(`husband: here is your cold drinks. ${colddrinks} anything else?`);
console.log("wife: no lets go we are getting late")
console.log("husband:thank you for the reminder");





return ticket;
}


preMovie().then((m)=> console.log(`person3: shows${m}`));


console.log('person4: shows ticket');
console.log('person5: shows ticket'); 