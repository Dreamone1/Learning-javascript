const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(function(num){
  return num === 'elephant';
})

const startsWithS = animals.findIndex(function(animals){
  return  animals[0] === 's';
})

//我们有时想在数组中找到元素的位置。这就是.findIndex（）方法的用武之地！在数组上调用.findIndex（）将返回在回调函数中求值为true的第一个元素的索引。