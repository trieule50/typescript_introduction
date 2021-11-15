// console.log("Hello world!");
// Nothing happened - there were no type errors, so we didn’t get any output in our console since there was nothing to report. We got some JS file output instead.


// This is an industrial-grade general-purpose greeter function:
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
//   }
   
//   greet("Brendan");

function greet(person: string, date: Date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}

greet("Maddision", new Date());