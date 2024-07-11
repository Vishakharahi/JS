//1.add the two string in js.
let a="vishakha";
let b=42;
console.log(a + b);

//2.use to typeof oprator to find datatype of string in last question.

console.log(typeof(a));

//3.create a const object in JS can you change it to hold a number leter.

const item = {
    name : "vishakha",
    rollno : 42,
    course : "MCA"
}
console.log(item);
//item = 1;  --> you can not access the same name of object

//4.try to add new key to const object in Js.

const items = {
    name : "vishakha",
    rollno : 42,
    course : "MCA"
}
items['friend']="janki"
console.log(items);


//write a JS program to create a word meaning dictnory of three words.

const dist = {
    vishakha : "The name Vishakha is a Sanskrit name that means star or ray of light. It is a popular name in India, and is often given to girls",
    janki : "Having Goddess Sita, Daughter of king Janak",
    krupa : "Grace, favour"
}
console.log(dist);


