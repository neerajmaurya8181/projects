let buttons = document.querySelectorAll(".child");
let result=document.querySelector("#result");
let reset=document.querySelector("#reset");

let flag = false;

const winarray=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (flag) {
            button.innerText = 'X';
            flag = false;
        } else {
            button.innerText = "O";
            flag = true;
        }
        
        // Disable the button
        button.disabled = true;
        checkWinner();
    });
});
function checkWinner(){
    for(item of winarray){
        let v1=buttons[item[0]].innerText;
        let v2=buttons[item[1]].innerText;
        let v3=buttons[item[2]].innerText;
        if(v1!=""&&v2!=""&&v3!=""){
            if(v1==v2&v2==v3){
                result.innerText="winner "+v1;
            }
        }
        
    }
    
}
reset.addEventListener("click",()=>{
    buttons.forEach((e)=>{
        e.innerText="";
        e.disabled=false;
    })
})