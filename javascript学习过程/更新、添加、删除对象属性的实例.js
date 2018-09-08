let spaceship = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth',
    color: 'silver',
    'Secret Mission' : 'Discover life outside of Earth.'
  };
  
// 更新对象中某个属性的值
spaceship.color = 'glorious gold';
// 添加新的属性(key)和值(value)
spaceship.numEngines = 5;
//删除对象中某个属性
delete spaceship['Secret Mission'];