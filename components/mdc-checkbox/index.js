import {MDCCheckboxFoundation} from  '../../foundation/mdc-checkbox';
import {selectors} from  '../../foundation/mdc-checkbox/constants';
import {MDCComponent} from '../mdc-base';

export class MDCCheckbox extends MDCComponent {
  constructor(el) {
    super(el);
  }

  getDefaultFoundation() {
    return new MDCCheckboxFoundation();
  }

  getSetterHooks() {
    return {
      setIconString: (iconString) => {
        this.root_.querySelector(selectors.ICON).textContent = iconString;
      },
      setChecked: (checked) => {
        this.selectorInputEl_.checked = checked;
      },
      setIndeterminate: (indeterminate) => {
        this.selectorInputEl_.indeterminate = indeterminate;
      },
      setValue: (value) => {
        this.selectorInputEl_.value = value;
      }
    }
  }

  getGetterHooks() {
    return {
      getChecked: () => {
        return this.selectorInputEl_.checked;
      },
    }
  }

  setChecked(checked) {
    this.foundation.setChecked(checked);
  }

  setIndeterminate(indeterminate) {
    this.foundation.setIndeterminate(indeterminate);
  }

  setValue(value) {
    this.foundation.setValue(value);
  }

  initialSyncWithDOM() {
    this.root_.addEventListener('change', () => this.foundation.handleChange());
  }

  get selectorInputEl_() {
    return this.root_.querySelector(selectors.INPUT);
  }
}
