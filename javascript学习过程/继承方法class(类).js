//我觉得我快要晕了，谁来用通俗的语言拯救一下我！！！！
class HospitalEmployee {
    constructor(name) {
      this._name = name;
      this._remainingVacationDays = 20;
    }
    
    get name() {
      return this._name;
    }
    
    get remainingVacationDays() {
      return this._remainingVacationDays;
    }
    
    takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
    //使用关键词(static)静态创建一个名字为generatePassword的方法，该方法返回一个0到10000的随机数字
    //静态方法是在类上调用的，而不是在类的实例上调用的。
    static generatePassword() {
      return Math.floor(Math.random()*10000);
    }
  }
  //extends关键词“继承”，下面的实例是：创建一个名字为Nurse的子类，并继承了HospitalEmployee这个父类的属性和方法！
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
    //super关键字调用父类的constructor()构造函数( )。
    super(name);
    this._certifications = certifications;
    }
    get certifications() {
      return this._certifications;
    }
    addCertification(newCertification) {
      this._certifications.push(newCertification);
    }
  }
  
const nurseOlynyk = new Nurse('Olynyk', ['Trauma','Pediatrics']);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);