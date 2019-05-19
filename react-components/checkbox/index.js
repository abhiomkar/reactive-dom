import {MDCComponent} from '../base';
import {MDCCheckboxFoundation} from '../../foundation/mdc-checkbox';
import {icons} from '../../foundation/mdc-checkbox/constants';
import React from 'react';

export class MDCCheckbox extends MDCComponent {
  constructor(props) {
    super(props);

    this.state = {
      iconString: icons.OUTLINE_BLANK,
      checked: props.checked,
      value: props.value,
      indeterminate: props.indeterminate,
    }

    this.selectorInput = React.createRef();
  }

  static defaultProps() {
    return {
      checked: false,
      indeterminate: false,
      value: '',
      onChange: () => {},
    }
  }

  getDefaultFoundation() {
    return new MDCCheckboxFoundation();
  }

  getSetterHooks() {
    return {
      setIconString: (iconString) => {
        this.setState({iconString});
      },
      setChecked: (checked) => {
        this.setState({checked});
      },
      setIndeterminate: (indeterminate) => {
        this.selectorInput.current.indeterminate = indeterminate;
      },
      setValue: (value) => {
        this.setValue({value});
      }
    };
  }

  getGetterHooks() {
    return {
      getChecked: () => {
        return this.selectorInput.current.checked;
      },
    };
  }

  render() {
    return (
      <div className='mdc-checkbox'>
        <input ref={this.selectorInput} className='mdc-checkbox__input' type='checkbox' checked={this.state.checked}
            onChange={() => this.foundation.handleChange()} value={this.state.value} />
        <span className='mdc-checkbox__ripple'></span>
        <span className='material-icons mdc-checkbox__icon'>{this.state.iconString}</span>
      </div>
    );
  }
}
