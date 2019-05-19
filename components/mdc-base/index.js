export class MDCComponent {
  constructor(el) {
    this.root_ = el;

    this.foundation = this.getDefaultFoundation();
    this.initialSyncWithDOM();
    const setterHooks = this.getSetterHooks();
    if (setterHooks) {
      this.foundation.setSetterHooks(setterHooks);
    }

    const getterHooks = this.getGetterHooks();
    if (getterHooks) {
      this.foundation.setGetterHooks(getterHooks);
    }
  }

  get $data() {
    return this.foundation.$data;
  }

  getDefaultFoundation() {}

  initialSyncWithDOM() {}

  getSetterHooks() {}

  getGetterHooks() {}
}
