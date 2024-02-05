let a=document.querySelector(".c");
let b=document.querySelector(".b");

let h=document.querySelector(".h1");

let turn=0;
a.addEventListener("click",function()
{
    h.innerText="FRIENDS";
    h.style.color="#1b5e52"
    a.innerText="Friend";
    turn=1;
    b.innerText="Remove";

})
b.addEventListener("click",function()
{
    if(turn==1)
    {
        h.innerText="STRANGER";
        h.style.color="red";
        b.innerText="Removed";
        a.innerText="Add Friend";

    }
    
})
