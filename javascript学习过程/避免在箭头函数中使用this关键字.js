//避免在对象中箭头函数里使用this关键字
const robot = {
    energyLevel: 100,
    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
}

robot.checkEnergy();