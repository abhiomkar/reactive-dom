import {MDCListFoundation} from  '../../foundation/mdc-list';
import {selectors} from  '../../foundation/mdc-list/constants';
import {MDCComponent} from '../mdc-base';

export class MDCList extends MDCComponent {
  constructor(el) {
    super(el);
  }

  getDefaultFoundation() {
    return new MDCListFoundation({
      selectedItemIndex: this.selectedItemIndex_,
    });
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

  setSelectedIndex(checked) {
    this.foundation.setChecked(checked);
  }

  setIndeterminate(indeterminate) {
    this.foundation.setIndeterminate(indeterminate);
  }

  setValue(value) {
    this.foundation.setValue(value);
  }

  initialSyncWithDOM() {
    this.root_.addEventListener('change', (event) => this.foundation.handleChange(event));
  }

  get selectedItemIndex_() {
    return this.root_.querySelector(selectors.ITEM_SELECTED);
  }
}
