class Emitter {
  events = {}

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  };

  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach(listener => console.log(`tank shot: ${listener}`));
    }
  };
};

const emitter = new Emitter();

emitter.on('shot', amx30B.shot());
emitter.on('shot', amx50B.shot());
emitter.on('shot', amx13_105.shot());

emitter.emit('shot');
