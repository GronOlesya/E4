let powerConsumptionSumm = 0;

function Device(deviceName, powerConsumption, deviceLocation) {
    this.deviceName = deviceName,
        this.deviceLocation = deviceLocation,
        this.powerConsumption = powerConsumption,
        this.isPowerOn = false
}

Device.prototype.changePower = function () {
    if (this.isPowerOn === false) {
        this.isPowerOn = true
        console.log(`Питание ${this.deviceName} включено!`)
        this.powerConsumptionMath(this.isPowerOn)
    } else {
        this.isPowerOn = false
        console.log(`Питание ${this.deviceName} выключено!`)
        this.powerConsumptionMath(this.isPowerOn)
    }
}

Device.prototype.powerConsumptionMath = function (boolean) {
    if (boolean === true) {
        powerConsumptionSumm += this.powerConsumption
        console.log(`Общее энергопотребление включённых приборов в доме = ${powerConsumptionSumm} W`)
    } else {
        powerConsumptionSumm -= this.powerConsumption
        console.log(`Общее энергопотребление включённых приборов в доме = ${powerConsumptionSumm} W`)
    }
}

const TV = new Device('Телевизор', 500, 'Гостинная');
TV.developerName = 'Haier';
TV.modelName = '50 Smart TV AX Pro';

TV.doChill = function () {
    if (this.isPowerOn == true) {
        console.log('Отдохнем от учебы');
    } else {
        console.log('Для того, чтобы начать - включите телевизор!');
    }
}

const bra = new Device('Бра', 50, 'Гостинная');
bra.brightness = '325 люмен';

const teapot = new Device('Чайник', 800, 'Кухня');
teapot.developerName = 'Tefal';
teapot.modelName = 'KO851830';

teapot.doTea = function () {
    if (this.isPowerOn === true) {
        console.log('Выпьем чаю');
    } else {
        console.log('Для того, чтобы вскипятить воду, для начала включите чайник в розетку!');
    }
}

teapot.maintainTemp = function () {
    if (this.isPowerOn === true) {
        console.log('Ставим чайник на режим поддержания температуры');
    } else {
        console.log('Для того, чтобы вскипятить воду, для начала включите чайник в розетку!');
    }
}
console.log(TV, bra, teapot);
TV.doChill();
TV.changePower();
TV.doChill();
teapot.doTea();
teapot.changePower();
teapot.doTea();
teapot.maintainTemp();
teapot.changePower();