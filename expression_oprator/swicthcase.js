const prompt=require("prompt-sync")({sigint:true});
let choice = prompt("what is your choice?");

switch(choice){
    case '1':
        console.log("insert");
        break;
    case '2':
        console.log("update");
        break;
    case '3':
        console.log("delete");
        break;
    case '0':
        console.log("exit");
        break;
    default:
        console.log("your choice is not special");
}