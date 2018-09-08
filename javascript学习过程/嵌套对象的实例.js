let spaceship = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: "91031-XLT",
      focalLength: 2032 
    },
    crew: {
      captain: { 
        name: 'Sandra', 
        degree: 'Computer Engineering', 
        encourageTeam() { console.log('We got this!') },
       'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
    },
    engine: {
      model: "Nimbus2000"
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: "HD"
      },
      backup: {
        battery: "Lithium",
        terabytes: 50
      }
    }
  }; 
  //在对象中访问其他对象（嵌套对象）
  let capFave = spaceship.crew.captain['favorite foods'][0];
  //在对象中更新了某个属性，这个属性的值是其他对象
  spaceship.passengers = [{name:'jack'},{name:'yuwei'}];
  //在对象中访问其他对象里第1个索引的属性
  let firstPassenger = spaceship.passengers[0]
  //打印对象中其他对象里有多少属性
  console.log(spaceship.passengers.length)