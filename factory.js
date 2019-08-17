class TankFactory {
  createTank(name = '', customProps = {}) {
    let tank;

    switch (name) {
      case 'AMX 30B':
        tank = new AMX_30B(customProps);
        break;
      case 'AMX 50B':
        tank = new AMX_50B(customProps);
        break;
      case 'AMX 13 105':
        tank = new AMX_13_105(customProps);
        break;
      default:
        tank = new AMX_30B(customProps);
    }

    tank.getTanksType = () => tank.type;
    tank.shot = () => tank.gunDamage;

    return tank;
  }
}

class AMX_30B {
  constructor({turret, gun, engine} = {}) {
    this.turret = turret || 'AMX 30B';
    this.gun = gun || '105mm mle. F1';
    this.engine = engine || 'Hispano-Suiza HS 110';

    this.type = 'medium';
    this.name = 'AMX 30B';
    this.gunDamage = 390;
  }
}

class AMX_50B {
  constructor({turret, gun, engine} = {}) {
    this.turret = turret || 'AMX 50B';
    this.gun = gun || '120mm SA46';
    this.engine = engine || 'Maybach HL 295F';

    this.type = 'heavy';
    this.name = 'AMX 50B';
    this.gunDamage = 400;
  }
}

class AMX_13_105 {
  constructor({turret, gun, engine} = {}) {
    this.turret = turret || 'AMX 13 105';
    this.gun = gun || '105mm D. 1504';
    this.engine = engine || 'SOFAM 8 Gxb';

    this.type = 'light';
    this.name = 'AMX 13 105';
    this.gunDamage = gun ? 410 : 360;
  }
}

const tankFactory = new TankFactory();
const amx30B = tankFactory.createTank('AMX 30B', {engine: 'Hispano-Suiza HS 120'});
const amx50B = tankFactory.createTank('AMX 50B');
const amx13_105 = tankFactory.createTank('AMX 13 105', {gun: '110mm D. 1504'});
const franceTank = tankFactory.createTank();
