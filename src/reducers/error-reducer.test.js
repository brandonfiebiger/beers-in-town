import { errorReducer } from './error-reducer';
import * as actions from '../actions';

describe('errorReducer', () => {
  it('should return intial state by default', () => {
    const expected = false;
    const action = {type: null}

    const result = errorReducer(undefined, action);

    expect(result).toEqual(expected);
  })

  it('should return true if action.type is HAS_ERRORED', () => {
    const mockState = false
    const expected = true;
    const action = {type: 'HAS_ERRORED', error: true}
  
    const result = errorReducer(mockState, action);

    expect(result).toEqual(expected);
  })

  it('should return true if action.type is NO_ERROR', () => {
    const mockState = true
    const expected = false;
    const action = {type: 'NO_ERROR', error: false}
  
    const result = errorReducer(mockState, action);

    expect(result).toEqual(expected);
  })
})