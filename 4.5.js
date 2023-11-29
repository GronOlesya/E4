let powerConsumptionSumm = 0;

class Device {
    constructor(deviceName, powerConsumption, deviceLocation) {
        this.deviceName = deviceName,
            this.deviceLocation = deviceLocation,
            this.powerConsumption = powerConsumption,
            this.isPowerOn = false
    }
    changePower() {
        if (this.isPowerOn === false) {
            this.isPowerOn = true;
            console.log(`Питание ${this.deviceName} включено!`);
            this.powerConsumptionMath(this.isPowerOn);
        } else {
            this.isPowerOn = false;
            console.log(`Питание ${this.deviceName} выключено!`);
            this.powerConsumptionMath(this.isPowerOn);
        }
    }
    powerConsumptionMath(boolean) {
        if (boolean === true) {
            powerConsumptionSumm += this.powerConsumption;
            console.log(`Общее энергопотребление включённых приборовв доме = ${powerConsumptionSumm} W`);
        } else {
            powerConsumptionSumm -= this.powerConsumption;
            console.log(`Общее энергопотребление включённых приборов в доме = ${powerConsumptionSumm} W`);
        }
    }
}

class Teapot extends Device {
    constructor(deviceName, powerConsumption, deviceLocation, developerName, modelName) {
        super(deviceName, powerConsumption, deviceLocation);
        this.developerName = developerName
        this.modelName = modelName
    }
    doTea() {
        if (this.isPowerOn === true) {
            console.log('Выпьем чаю');
        } else {
            console.log('Для того, чтобы вскипятить воду, для начала включите чайник в розетку!');
        }
    }
    maintainTemp() {
        if (this.isPowerOn === true) {
            console.log('Ставим чайник на режим поддержания температуры');
        } else {
            console.log('Для того, чтобы вскипятить воду, для начала включите чайник в розетку!');
        }
    }
}


class TV extends Device {
    constructor(deviceName, powerConsumption, deviceLocation, videoCard, cpu) {
        super(deviceName, powerConsumption, deviceLocation);
        this.videoCard = videoCard,
            this.cpu = cpu
    }
    doChill () {
        if (this.isPowerOn === true) {
            console.log('Отдохнем от учебы');
        } else {
            console.log('Для того, чтобы начать - включите телевизор!');
        }
    }
}

class Bra extends Device {
    constructor(deviceName, powerConsumption, deviceLocation, brightness) {
        super(deviceName, powerConsumption, deviceLocation);
        this.brightness = `${brightness} люмен`
    }
}


const myTV = new TV('Телевизор', 500, 'Гостинная', 'Haier', '50 Smart TV AX Pro');

const myBra = new Bra('Бра', 50, 'Гостинная', 325);

const TefalKO851830 = new Teapot('Чайник', 800, 'Кухня', 'Tefal', 'KO851830');


console.log(myTV, myBra, TefalKO851830);
myTV.doChill();
myTV.changePower();
myTV.doChill();
myBra.changePower();
TefalKO851830.doTea();
TefalKO851830.changePower();
TefalKO851830.doTea();
TefalKO851830.maintainTemp();
TefalKO851830.changePower();