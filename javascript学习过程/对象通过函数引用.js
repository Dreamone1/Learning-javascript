let spaceship = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
};

// Write your code below
function greenEnergy(obj) {
    obj['Fuel Type'] = 'avocado oil';
};
let remotelyDisable = obj => {
    obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
//对象通过引用传递。这意味着，当我们将分配给一个对象的变量作为参数传递给一个函数时，计算机会将参数名称解释为指向存储该对象的内存空间。
//因此，改变对象属性的函数实际上会永久地改变对象(即使对象被分配给常量变量)。