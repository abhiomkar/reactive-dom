export class MDCFoundation {
  constructor() {
    this.$defaultData = this.getDefaultData();
    this.$data = this.observe(this.$defaultData);
    this.props = {};
  }

  getDefaultData() {}

  setSetterHooks(setterHooks) {
    this.setterHooks_ = setterHooks;
  }

  setterHooks() {}

  setGetterHooks(getterHooks) {
    this.getterHooks_ = getterHooks;
  }

  getterHooks() {}

  setProps(props) {
    this.props = props;
  }

  forceRenderer(forceRender) {
    this.forceRender = forceRender;
  }

  observe(o) {
    const buildProxy = (o) => {
      return new Proxy(o, {
        set: (target, property, value) => {
          // same as above, but add prefix
          const setterName = 'set' + this.capitalize_(property);
          const setterMethod = this.setterHooks_[setterName];
          if (this.setterHooks_ && !!setterMethod) {
            setterMethod(value);
          }

          if (this.forceRender) {
            this.forceRender();
          }

          // callback(prefix + this.capitalize_(property), value);
          target[property] = value;
          return true;
        },
        get: (target, property) => {
          // return a new proxy if possible, add to prefix
          const out = target[property];
          if (out instanceof Object) {
            return buildProxy(property + '.', out);
          }

          const getterName = 'get' + this.capitalize_(property);
          const getterMethod = this.getterHooks_[getterName];
          if (this.getterHooks_ && !!getterMethod) {
            return getterMethod();
          }

          return out;  // primitive, ignore
        },
      });
    }

    return buildProxy(o);
  }

  capitalize_(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
