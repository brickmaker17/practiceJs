// const makeArrayConsecutive2 = statues => {
//     const sort = statues.sort((a, b) => a - b);
//     const stuff = statues.length;
//     const test = statues[stuff - 1];
//     const compare = (test - stuff);
//     // let difference = stuff.filter(x => !test.includes(x)).concat(test.filter(x => !stuff.includes(x)));
//     console.log(sort)
// }
// makeArrayConsecutive2([0, 3])

// const makeArrayConsecutive2 = statues => {
//         const sort = statues.sort((a, b) => a - b);
//         const arr = [];
//        statues.forEach(i => {
//            if(i !== sort[i]) {
//                console.log(i)
//         }
//     });
// }
// makeArrayConsecutive2([10, 4, 6])

// const makeArrayConsecutive2 = statues => {
//     const arr = [];
//     let i = 0;
//     const sort = statues.sort((a, b) => a - b);
//     const stuff = statues.length;
//     const test = statues[stuff - 1];
//     const compare = (test - stuff);
//     while( i < test){
//         arr.push(i++)
//     }
//     let difference = statues.filter(x => !arr.includes(x)).concat(arr.filter(x => !statues.includes(x)));
//     difference.shift()
//     console.log(arr)
// }
// makeArrayConsecutive2([6, 2, 3, 8])

const makeArrayConsecutive2 = statues => {
    const arr = [];
    let i = Math.min(...statues);
    const sort = statues.sort((a, b) => a - b);
    const stuff = statues.length;
    const test = statues[stuff - 1];
    const compare = (test - stuff);
    while( i < test){
        arr.push(i++)
    }
    let difference = statues.filter(x => !arr.includes(x)).concat(arr.filter(x => !statues.includes(x)));
    difference.shift();
    difference.length
}
makeArrayConsecutive2([6, 2, 3, 8])

//Best answer 

let makeArrayConsecutive2 = (statues) => (Math.max(...statues) - Math.min(...statues) + 1) - statues.length;



