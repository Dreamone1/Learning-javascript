//对于外环阵列myArray中的每个元素，内环将完整运行，将外环阵列myArray [ I ]中的当前元素与内环阵列中的每个元素进行比较。当找到匹配项时，它会向控制台打印一个字符串。
let bobsFollowers = ['a','b','c','d'];
let tinasFollowers = ['a','d','f'];
let mutualFollowers = [];
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  };
};
console.log(mutualFollowers);