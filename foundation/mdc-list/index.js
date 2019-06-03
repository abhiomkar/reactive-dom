import {icons, cssClasses} from './constants';
import {MDCFoundation} from '../mdc-base';
import * as keyCode from '../input/keycodes';

export class MDCListFoundation extends MDCFoundation {
  getDefaultStore(props) {
    return {
      classNames: [cssClasses.ROOT],
      selectedIndex: props.selectedIndex,
      singleSelection: props.singleSelection,
      listItems: this.computed.listItems(),
    };
  }

  // TODO: Make this Vue.js like computer property:
  // https://vuejs.org/v2/guide/computed.html#Computed-Setter
  get computed() {
    return {
      listItems: () => {
        const {selectedIndex, singleSelection} = this.store || this.props;

        return [...Array(this.props.listItemCount).keys()].map((index) => {
          let tabIndex = null;
          let ariaSelected = null;
          let classNames = [cssClasses.ITEM];

          if (singleSelection) {
            if (index === 0 && selectedIndex === undefined) {
              tabIndex = 0;
              ariaSelected = false;
            } else if (selectedIndex === index) {
              tabIndex = 0;
              classNames.push(cssClasses.ITEM_SELECTED);
              ariaSelected = true;
            } else {
              tabIndex = -1;
              ariaSelected = false;
            }
          }

          return {
            tabIndex,
            classNames,
            ariaSelected,
          };
        });
      },
    };
  }

  getDefaultProps() {
    return {
      selectedIndex: -1,
      singleSelection: false,
    };
  }

  getRefs() {
    return {
      listItems: {
        focus: {
          set: () => {},
        }
      },
    }
  }

  handleKeydown(event, eventData) {
    event.preventDefault(); // Prevent page scroll
    const {index} = eventData;

    switch (event.key) {
      case keyCode.ARROW_UP:
        this.refs.listItems.focus.set(index - 1);
        break;
      case keyCode.ARROW_DOWN:
        this.refs.listItems.focus.set(index + 1);
        break;
    }
  }

  handleClick(event, eventData) {
    const {index} = eventData;
    this.store.selectedIndex = index;
    this.store.listItems = this.computed.listItems();
  }

  setSelectedIndex(selectedIndex) {
    this.store.selectedIndex = selectedIndex;
  }
}
