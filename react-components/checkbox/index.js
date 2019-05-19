import {MDCCheckboxFoundation} from '../../foundation/mdc-checkbox';
import React from 'react';

export class MDCCheckbox extends React.Component {
  constructor(props) {
    super(props);

    this.selectorInput = React.createRef();

    this.foundation = new MDCCheckboxFoundation(props);
    // TODO: set only supported props
    this.foundation.forceRenderer = () => this.setState({});
    this.foundation.setSetterHooks(this.getSetterHooks_());
  }

  getSetterHooks_() {
    return {
      setIndeterminate: (indeterminate) => {
        this.selectorInput.current.indeterminate = indeterminate;
      },
    };
  }

  componentDidMount() {
    const indeterminate = this.props.indeterminate || false;
    this.selectorInput.current.indeterminate = indeterminate;
    this.foundation.setIndeterminate(indeterminate);
  }

  render() {
    const {value, iconString} = this.foundation.store;
    const {checked} = this.props;

    return (
      <div className='mdc-checkbox'>
        <input ref={this.selectorInput} className='mdc-checkbox__input' type='checkbox' defaultChecked={checked}
            onChange={(event) => this.foundation.handleChange(event)} value={value} />
        <span className='mdc-checkbox__ripple'></span>
        <span className='material-icons mdc-checkbox__icon'>{iconString}</span>
      </div>
    );
  }
}
