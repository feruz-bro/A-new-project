let name = prompt(`Name`)
let alex = `Alex`

let code = prompt(`Code please `)
let codetwo = 7777

let balance = prompt(`How much do you want to take ?`)
let balancetwo = 10000




if(name === `Alex`){

    // alert(`Welcome`)

    if(code === 7777){
       
    }
    
   if(balance !== null && !isNaN(balance)) {
    balance = Number(balance);

    if(balance <= balancetwo){
        balancetwo -= balance;

        alert(`You have taken ${balancetwo}. Remaining balance is ${balance}`);


    }else {
        alert(`You do not have enough money ${balancetwo}`)
    }
    alert(`You are welcome `)




}

   




}else {
    alert(`go home`)
}







