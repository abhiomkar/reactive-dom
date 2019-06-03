import './index.scss';

/**
 * Bootstrap Vanilla
 */
import {MDCCheckbox} from './components/mdc-checkbox';
const checkbox = new MDCCheckbox(document.querySelector('.vanilla-example .mdc-checkbox'));
// checkbox.setIndeterminate(true);
checkbox.setChecked(true);



/**
 * Bootstrap React
 */
import {MDCCheckbox as Checkbox} from './react-components/checkbox';
ReactDOM.render(<Checkbox indeterminate={true} />, document.querySelector('.react-example-checkbox'));

import {MDCList as List, MDCListItem as ListItem} from './react-components/list';
const ListExample = () => (
  <List singleSelection={true} selectedIndex={2}>
    <ListItem>Item 1</ListItem>
    <ListItem>Item 2</ListItem>
    <ListItem>Item 3</ListItem>
    <ListItem>Item 4</ListItem>
    <ListItem>Item 5</ListItem>
  </List>
);
ReactDOM.render(<ListExample />, document.querySelector('.react-example-list'));
