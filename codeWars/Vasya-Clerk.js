// const tickets = (peopleInLine) => {
//     const wall = []
//     peopleInLine.forEach(x => { 
//         if(x <= 25) {
//             const p = peopleInLine.shift(); 
//             wall.push(p);
//             console.log(p);
//         } else {

//         }
//     })
// }
// tickets([25, 25, 50, 50]);

// const tickets = (peopleInLine) => {
//     const wall = []
//     const add = (a, b) => [a + b];
//     for (let i = 0; i < peopleInLine.length; i++) {
//         if(i <= 25) {
//             const p = peopleInLine.shift(); 
//             wall.push(p);
//             const sum = wall.reduce(add);

//                 console.log(sum);
//         } else if (i <= 50) {
//             console.log('HI')            
//         }
//     }
//     console.log(peopleInLine);
// }
// tickets([25, 25, 50, 50]);

// const tickets = (peopleInLine) => {
//     const wall = []
//     const add = (a, b) => [a + b];
//     peopleInLine.forEach(x => { 
//         const p = peopleInLine.shift(); 
//         wall.push(x);
//         // const sum = peopleInLine.reduce(add);
//         // const wallet = wall.reduce(add);
//         console.log(wall)
       


//     })
// }
// tickets([25, 25, 50, 50]);

const tickets = (peopleInLine) => {
    let wall = 0
    const add = (a, b) => [a + b];
    peopleInLine.forEach((x)=> {
        wall += x
        console.log(wall);
    });
}
tickets([25, 25, 50, 50]);