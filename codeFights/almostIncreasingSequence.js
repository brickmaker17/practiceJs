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

// const almostIncreasingSequence = sequence => {
//     const arr = sequence.map(x => x);
//     let i = 1
//     while(i < sequence.length -1){
//         i++;
//     }
//     const compare = (sequence[0] < arr[i])? true : false;
//     return compare
// }


// const almostIncreasingSequence = sequence => {
//     let extraLifeUsed = false;
//     let i = 0;
//     while (i < sequence.length) {
//       if (sequence[i] >= sequence[i + 1]) {
//         if (extraLifeUsed) {
//           return false;
//         }
//         sequence.splice(i, 1);
//         extraLifeUsed = true;
//         i = 0;
//         continue;
//       }
//       i++;
//     }
  
//     return console.log(true);
//   }

const almostIncreasingSequence = sequence => {
    let signal = false;
    for (let i = 0; i < sequence.length - 1; i++){
        if (sequence[i] >= sequence[i+1] && !signal){
            if (sequence[i] >= sequence[i+2]){
            signal = true;
            sequence.splice(i, 1);
            i = i - 1;
            console.log(sequence);
            } else {
            signal = true;
            sequence.splice(i+1, 1);
            i = i - 1;
            console.log(sequence);
            }
        } else if (signal){
            for (let j = 0; j < sequence.length - 1; j++){
                if (sequence[j] >= sequence[j+1]){
                    return false;
                }
            }
        }
    }
    return true;
}
almostIncreasingSequence([1, 2, 3, 4, 3, 6]);