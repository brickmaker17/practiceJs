// function digital_root(n) {
//     const num = n.toString();
//     const str = num.split('');
//     console.log(str)
// }
// digital_root(16);

// function digital_root(n) {
//     const num = n.toString().split('');
//     console.log(num)
// }
// digital_root(16);

// function digital_root(n) {
//     const arr = Array.from(n.toString(), Number);
//     const sum = (total, num) => total + num;
//     const total = arr.reduce(sum)
//     if(total >= 10) {
//         digital_root(total);
//     } else {
//         total
//     }
// }
// digital_root(169);

//How I solved it

const digital_root = n => {
    const arr = Array.from(n.toString(), Number);
    const sum = (total, num) => total + num;
    const total = arr.reduce(sum)
    return (total >= 10)? digital_root(total) : total;
}

//Best way 

function digital_root(n) {
    return (n - 1) % 9 + 1;
  }
digital_root(169);

