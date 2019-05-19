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
