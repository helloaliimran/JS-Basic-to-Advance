//branch creation in git
console.log("git switch -c name master");



console.log(1==="1")
console.log(1=="1")
console.log(null==undefined)
console.log(null===undefined)

const pizzaOrder = new Promise((resolve,reject)=>{
let isPizzaReady = true;
if (isPizzaReady){
    resolve("Pizza is ready");
}else{
    reject("Sorry No pizza today.");
}
});

pizzaOrder.then((mess)=>{
console.log(mess);
})
.catch((mess)=>{
    console.log(mess);
})