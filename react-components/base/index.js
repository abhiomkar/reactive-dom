export class MDCComponent extends React.Component {
  constructor(props) {
    super(props);

    this.foundation = this.getDefaultFoundation();
    const setterHooks = this.getSetterHooks();
    if (setterHooks) {
      this.foundation.setSetterHooks(setterHooks);
    }

    const getterHooks = this.getGetterHooks();
    if (getterHooks) {
      this.foundation.setGetterHooks(getterHooks);
    }

    this.initialSyncWithDOM();
  }

  get $data() {
    return this.foundation.$data;
  }

  getDefaultFoundation() {}

  initialSyncWithDOM() {}

  getGetterHooks() {}

  getSetterHooks() {}
}
