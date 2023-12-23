let rock=document.querySelector(".rock");
let paper=document.querySelector(".paper");
let scissors=document.querySelector('.scissors');
let winner=document.querySelector('#winner');

let option=['rock','paper','scissors'];

rock.addEventListener("click",(e)=>{
    
    check("rock");
});
paper.addEventListener("click",(e)=>{
    
    check("paper");
});
scissors.addEventListener("click",(e)=>{
    
    check("scissors");
});
function check(user){
    let index=Math.random()*3;
    index=Math.floor(index);
    let ai=option[index];
    let won=true;
    if(user===ai){
        winner.innerText="Draw";
        return;
    }
    else if(user=='rock'){
        won=ai==='paper'?false:true;
    }
    else if(user=='paper'){
        won=ai==='rock'?true:false;
    }else if(user=="scissors"){
        won=ai==='paper'?true:false;
    }
    if(won){
        winner.innerText="you won";
    }else{
        winner.innerText="comp won";
    }
    console.log(user,option[index]);

}
