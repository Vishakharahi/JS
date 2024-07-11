const prompt=require("prompt-sync")({sigint:true});
const alert=require("prompt-sync")({sigint:true});
let age = prompt("What's your age?");
age=Number.parseInt(age);
if(age<0)
{
    alert("this is not valid age");
}
else if(age<=18)
{
    alert("this not valid age for vating you are kid");
}
else
{
    alert("this is valid age for voating");
}

//ternory oprator

console.log("you can",(age<18? "not drive":"drive"));
