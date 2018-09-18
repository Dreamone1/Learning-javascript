const robotFactory = (model, mobile) => {
    return {
        model: model,
        mobile: mobile,
        beep() {
            console.log('Beep Boop');
        }
    }
};
const tinCan = robotFactory('P-500', true);
tinCan.beep();

//工厂(Factory)函数是为了快速创造出新的函数！！！