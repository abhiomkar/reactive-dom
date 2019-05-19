import {MDCComponent} from '../base';
import {MDCCheckboxFoundation} from '../../foundation/mdc-checkbox';
import {icons} from '../../foundation/mdc-checkbox/constants';
import React from 'react';

export class MDCCheckbox extends MDCComponent {
  constructor(props) {
    super(props);

    this.state = {
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

  componentDidMount() {
    this.foundation.handleMounted();
  }

  getDefaultFoundation() {
    return new MDCCheckboxFoundation();
  }

  getSetterHooks() {
    return {
      setIndeterminate: (indeterminate) => {
        this.selectorInput.current.indeterminate = indeterminate;
      },
    };
  }

  getGetterHooks() {
    return {
      getChecked: () => {
        return (this.selectorInput && this.selectorInput.current) ?
            this.selectorInput.current.checked :
            this.props.checked;
      },
      getIndeterminate: (indeterminate) => {
        return (this.selectorInput && this.selectorInput.current) ?
          this.selectorInput.current.indeterminate :
          this.props.indeterminate;
      },
    };
  }

  render() {
    return (
      <div className='mdc-checkbox'>
        <input ref={this.selectorInput} className='mdc-checkbox__input' type='checkbox' defaultChecked={this.props.checked}
            onChange={(event) => this.foundation.handleChange(event)} value={this.state.value} />
        <span className='mdc-checkbox__ripple'></span>
        <span className='material-icons mdc-checkbox__icon'>{this.foundation.$data.iconString}</span>
      </div>
    );
  }
}
