import {MDCListFoundation} from '../../foundation/mdc-list';
import {directives} from '../../foundation/mdc-list/constants';
import {classes} from '../base';
import React from 'react';

export const MDCListItem = (props) => {
  const {
    classNames,
    tabIndex,
    ariaSelected,
    children,
    foundation,
    index,
  } = props;

  return (
    <li className={classes(classNames)}
        tabIndex={tabIndex}
        aria-selected={ariaSelected}
        onClick={(e) => foundation.handleClick(e, {index})}
        onKeyDown={(e) => foundation.handleKeydown(e, {index})}>
      {children}
    </li>
  );
};

export class MDCList extends React.Component {
  constructor(props) {
    super(props);

    const componentProps = {
      listItemCount: this.props.children.length,
    };
    this.foundation = new MDCListFoundation({...props, ...componentProps});
    this.foundation.forceRenderer = () => this.setState({});
    this.foundation.setRefs({
      listItems: {
        focus: {
          set: (index) => console.log('focus: ', index),
        }
      }
    });
  }

  render() {
    const {role} = this.props;
    const {
      classNames,
      listItems,
    } = this.foundation.store;

    const listItemsRef = [];
    const children = React.Children.map(this.props.children, (child, index) => {
      const listItem = React.cloneElement(child, {...listItems[index], ...{foundation: this.foundation}, ...{index}})
      listItemsRef[index] = listItem;
      return listItem;
    });

    return (
      <ul className={classes(classNames)} role={role}>
        {children}
      </ul>
    );
  }
}
