const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce(function(accumulator,currentValue){
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
},10)

console.log(newSum);
//另一种广泛使用的迭代方法是.reduce（）。迭代遍历数组元素后，.reduce（）方法返回单个值，从而减少数组