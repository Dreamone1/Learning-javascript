let person = {
  _name: 'Lu Xun',
  _age: 137,
  //getter和setter方法允许您在访问或设置属性值之前处理数据。
  set age(ageIn) {
    if (typeof ageIn === 'number') {
      this._age = ageIn;
    } else {
      console.log('Invalid input');
      return 'Invalid input';
    }
  },
  get age() {
    console.log(`${this._name} is ${this._age} years old.`);
    return this._age;
  }

};


person.age = 'Thirty-nine';
person.age = 39;

console.log(person.age);