import {icons, cssClasses} from './constants';
import {MDCFoundation} from '../mdc-base';

export class MDCCheckboxFoundation extends MDCFoundation {
  getDefaultData() {
    return {
      iconString: icons.CHECK_BOX,
      value: '',
      checked: false,
      indeterminate: false,
    };
  }

  handleChange() {
    this.$data.iconString = this.$data.checked ? icons.CHECK_BOX : icons.OUTLINE_BLANK;
  }

  setChecked(checked) {
    this.$data.checked = checked;
    this.$data.iconString = this.$data.checked ? icons.CHECK_BOX : icons.OUTLINE_BLANK;
  }

  setIndeterminate(indeterminate) {
    this.$data.indeterminate = indeterminate;

    if (indeterminate) {
      this.$data.iconString = icons.INDETERMINATE;
    } else {
      this.$data.iconString = this.$data.checked ? icons.CHECK_BOX : icons.OUTLINE_BLANK;
    }
  }

  setValue(value) {
    this.$data.value = value;
  }
}
