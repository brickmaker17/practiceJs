// const almostIncreasingSequence = sequence => {
//     const compare = sequence.sort((a, b) => {
//         if(a < b){

//                 sequence.splice(sequence.indexOf(b), 1);
                
//         }
//     });
//     // const test = sequence.every((a, b) => a < b);
//     console.log(compare);
// }

// const almostIncreasingSequence = sequence => {
//     const arr = [];
//     sequence.forEach(element => {
//         arr.push(element)
//     });
//     arr.sort((a, b) => {
//                 if(a < b){
//                     console.log(true)                        
//                 }else {
//                     console.log(false)
//                 }
//             });

//     console.log(arr)
// }

// const almostIncreasingSequence = sequence => {
//     const arr = [];
//     sequence.sort((a) => {
//         arr.push(a)
        
//     });

//     if(sequence.length > 0) {
//     arr.splice(sequence.indexOf(0), 1);
//     sequence.splice(sequence.indexOf(1), 1);
//         console.log(sequence.length)
//         console.log(arr)
//     }

//         if(sequence.length > 0) {
//             sequence.sort((a, b) => {
//                 arr.pop(b);
//                 console.log(arr.push(a))
                
//             });
//             arr.splice(sequence.indexOf(1), 1);
//             sequence.splice(sequence.indexOf(1), 1);
//         }
//         console.log(arr);
// }

const almostIncreasingSequence = sequence => {
    const arr = sequence.map(x => x);
    let i = 1
    while(i < sequence.length -1){
        i++;
    }
    const compare = (sequence[0] < arr[i])? true : false;
    console.log(compare)
}

almostIncreasingSequence([1, 3, 2, 1]);