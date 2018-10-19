import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the templateFeature state domain
 */

const selectTemplateFeatureDomain = state =>
  state.get('templateFeature', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by TemplateFeature
 */

const makeSelectTemplateFeature = () =>
  createSelector(selectTemplateFeatureDomain, substate => substate.toJS());

export default makeSelectTemplateFeature;
export { selectTemplateFeatureDomain };
