const stray = (num) => {
    return num.find(value => {
        return num.indexOf(value) === num.lastIndexOf(value);
    });
}
stray([1, 0, 1])

// best Answer

function stray(numbers){
    for (var i in numbers){
       if (numbers.indexOf(numbers[i]) === numbers.lastIndexOf(numbers[i])){return numbers[i]}
    }
  }