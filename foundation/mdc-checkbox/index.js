import {icons, cssClasses} from './constants';
import {MDCFoundation} from '../mdc-base';

export class MDCCheckboxFoundation extends MDCFoundation {
  getDefaultStore(props) {
    return {
      value: props.value,
      checked: props.checked,
      indeterminate: props.indeterminate,
      iconString: icons.OUTLINE_BLANK,
    };
  }

  getDefaultProps() {
    return {
      value: '',
      checked: false,
      indeterminate: false,
    };
  }

  handleChange(event) {
    this.store.indeterminate = false;
    this.store.checked = event.target.checked;
    this.store.iconString = this.computed.getIconString();
  }

  setChecked(checked) {
    this.store.indeterminate = false;
    this.store.checked = checked;
    this.store.iconString = this.computed.getIconString();
  }

  setIndeterminate(indeterminate) {
    this.store.indeterminate = indeterminate;
    this.store.iconString = this.computed.getIconString();
  }

  get computed() {
    return {
      getIconString: () => {
        if (this.store.indeterminate) {
          return icons.INDETERMINATE;
        } else {
          return this.store.checked ? icons.CHECK_BOX : icons.OUTLINE_BLANK;
        }
      },
    };
  }

  setValue(value) {
    this.store.value = value;
  }
}
