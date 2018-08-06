//设置素组元素
let fruits = ['mango', 'papaya', 'pineapple', 'apple'];

//完整函数方法
groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});

//箭头函数方法
fruits.forEach(parameter => console.log('I want to eat a mango' + parameter));


//object "对象"学习过程
//定义了‘person’这个对象，冒号(:)左边称之为“键”，右边称之为“值”
let person = {
  name: 'Tyron',
  age: 40,
  weekendAlarm: 'No alarms needed',
  weekAlarm: 'Alarm set to 7AM',

  //这个是函数方法的表达方式（完整的表达方式）
  sayHello: function() {
    return `Hello, my name is ${this.name}`;
  },
  //这个是最新版本(ES6)中的简易表达方式，也可以使用箭头表达方式
  //箭头表达方式：sayGoodbye: () => { }
  sayGoodbye() {
    return 'Goodbye!';
  }
};

let friend = {
  name: 'yuwei'
};
//friend对象的键值，调用了person对象中键值
friend.sayHello = person.sayHello;

console.log(person.sayHello());

//直接从外部添加键值
person.hobbies = ['Basketball', 'Coaching'];
//重新设置键的值
person.hobbies = ['Basketball'];
console.log(person.hobbies);

//调用键值的两种方法：中括号内需要加引号('')
console.log(person['name']);
console.log(person.age);

let day = 'Tuesday';
let alarm;

if (day === 'Saturday' || day === 'Sunday' ) {
  alarm = 'weekendAlarm';
} else {
  alarm = 'weekAlarm';
}

console.log(person[alarm]);









  