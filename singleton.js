class Singleton {
  constructor(tank) {
    if (!!Singleton.instance) {
      return Singleton.instance;
    }

    Singleton.instance = this;
    this.tank = {...tank};

    return this;
  }

  getTankProperties() {
    return this.tank;
  }

  setNewGun(name) {
    this.tank.gun = name;
  }
}

const instanceAMX_30B_V1 = new Singleton(amx30B);
const instanceAMX_30B_V2 = new Singleton(amx30B);

instanceAMX_30B_V2.setNewGun('105mm mle. F2');
