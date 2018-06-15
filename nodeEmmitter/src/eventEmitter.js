class EventEmitter {
  constructor() {
    this._events = Object.create(null);
    this._subsribs = Object.create(null);
  }
  addEvents(nametitle) {
    if (!this._events[nametitle]) {
      this._events[nametitle] = [];
    }
  }

  on(name, fn) {
    if (!this._events[name]) {
      this._events[name] = [];
      // this._events[name].push(fn);
    }
    this._events[name].push(fn);
    // console.log(fn);
  }
  remove(name, fn) {
    if (this._events[name]) {
      this._events[name] = this._events[name].filter(el => {
        if (el !== fn) {
          return true;
        }
        return false;
      });

      if (!this._events[name].length) {
        delete this._events[name];
      }
    } else {
      return; // if not proprety
    }
  }

  emit(name, data) {
    if (this._events[name]) {
      this._events[name].forEach(func => {
        // func(data);
        func.call(null, data);
      });
    }
  }
}
module.exports = EventEmitter;
