import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the contactUs state domain
 */

const selectContactUsDomain = state => state.get('contactUs', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ContactUs
 */

const makeSelectContactUs = () =>
  createSelector(selectContactUsDomain, substate => substate.toJS());

export default makeSelectContactUs;
export { selectContactUsDomain };
