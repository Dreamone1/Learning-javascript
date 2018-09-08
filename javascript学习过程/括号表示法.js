let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    'Active Mission' : true,
    homePlanet : 'Earth', 
    numCrew: 5
   };
  
let propName =  'Active Mission';
  
// 访问包含数字，空格或特殊字符的键时，我们必须使用括号表示法。在这些情况下没有括号表示法，我们的代码会抛出错误。
let isActive = spaceship['Active Mission'];
//括号里变量名称不需要加入引号，这是为啥？！
console.log(spaceship[propName]);