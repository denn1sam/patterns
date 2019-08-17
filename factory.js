class TankFactory {
  createTank(name, customProps = {}) {
    switch (name) {
      case 'AMX 30B':
        return new AMX_30B(customProps);
      case 'AMX 50B':
        return new AMX_50B(customProps);
      case 'AMX 13 105':
        return new AMX_13_105(customProps);
      default:
        return new AMX_30B(customProps);
    }
  }
}

class AMX_30B {
  constructor({turret, gun, engine}) {
    this.turret = turret || 'AMX 30B';
    this.gun = gun || '105mm mle. F1';
    this.engine = engine || 'Hispano-Suiza HS 110';
    this.type = 'medium';
    this.name = 'AMX 30B';
  }
}

class AMX_50B {
  constructor({turret, gun, engine}) {
    this.turret = turret || 'AMX 50B';
    this.gun = gun || '120mm SA46';
    this.engine = engine || 'Maybach HL 295F';
    this.type = 'heavy';
    this.name = 'AMX 50B';
  }
}

class AMX_13_105 {
  constructor({turret, gun, engine}) {
    this.turret = turret || 'AMX 13 105';
    this.gun = gun || '105mm D. 1504';
    this.engine = engine || 'SOFAM 8 Gxb';
    this.type = 'light';
    this.name = 'AMX 13 105';
  }
}

const tankFactory = new TankFactory();
const amx30B = tankFactory.createTank('AMX 30B', {engine: 'Hispano-Suiza HS 120'});
const amx50B = tankFactory.createTank('AMX 50B');
const amx13_105 = tankFactory.createTank('AMX 13 105', {gun: '110mm D. 1504'});
const franceTank = tankFactory.createTank('franceTank');
