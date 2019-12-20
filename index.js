import Edit from './edit';
import info from './info';

/**
 * A method used to create the initial state of the element by declaring the
 * defaults for the elements props. Does not need to be defined.
 */
const initState = () => ({ });

/**
 * The fields that need to be customized are:
 * {name: a string that is displayed to a user in the editor
 * ui->icon: a string representing the name of the MDI (https://materialdesignicons.com/)
 * icon that is displayed to the user in the editor
 */
export default {
  ...info,
  name: 'Custom element',
  initState,
  Edit,
  ui: {
    icon: 'mdi-help-circle',
    forceFullWidth: true
  }
};
