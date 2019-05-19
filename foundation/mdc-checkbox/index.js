import {icons, cssClasses} from './constants';
import {MDCFoundation} from '../mdc-base';

export class MDCCheckboxFoundation extends MDCFoundation {
  getDefaultData() {
    return {
      value: '',
      checked: false,
      indeterminate: false,
    };
  }

  handleMounted() {
    if (this.props.indeterminate) {
      this.$data.indeterminate = true;
    }

    this.$data.iconString = this.$view.getIconString();
  }

  handleChange(event) {
    this.$data.checked = event.target.checked;
    this.$data.iconString = this.$view.getIconString();
  }

  setChecked(checked) {
    this.$data.checked = checked;
    this.$data.iconString = this.$view.getIconString();
  }

  setIndeterminate(indeterminate) {
    this.$data.indeterminate = indeterminate;
    this.$data.iconString = this.$view.getIconString();
  }

  get $view() {
    return {
      getIconString: () => {
        if (this.$data.indeterminate) {
          return icons.INDETERMINATE;
        } else {
          return this.$data.checked ? icons.CHECK_BOX : icons.OUTLINE_BLANK;
        }
      },
    };
  }

  setValue(value) {
    this.$data.value = value;
  }
}
