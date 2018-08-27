//创建了一个名字叫Surgeon的类
class Surgeon {
  //调用了constructor()函数，里面有两个参数
  constructor(name, department) {
    //调用了this. 关键字
    this.name = name;
    this.department = department;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  //创建了takeVacationDays(一个参数)方法，_remainingVacationDays = _remainingVacationDays - daysOff
  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}
//调用了名字叫Surgeon的类，并用new关键字输入新的参数
const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurry.name);
surgeonCurry.takeVacationDays(3);
console.log(surgeonCurry.remainingVacationDays);