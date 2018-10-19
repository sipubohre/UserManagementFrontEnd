import { fromJS } from 'immutable';
import templateFeatureReducer from '../reducer';

describe('templateFeatureReducer', () => {
  it('returns the initial state', () => {
    expect(templateFeatureReducer(undefined, {})).toEqual(fromJS({}));
  });
});
