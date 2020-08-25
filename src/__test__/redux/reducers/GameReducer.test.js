import { gameReducer, initialState } from '../../../redux/reducers/GameReducer';
import * as types from '../../../redux/actions/types';

describe('Game reducer', () => {
  it('should return the initial state', () => {
    expect(gameReducer(undefined, {})).toEqual(initialState);
  });

  it('should handle UPDATE_PLAYER_NAME', () => {
    const playerName = 'Lucas';
    const args = playerName;
    expect(gameReducer(undefined, { type: types.UPDATE_PLAYER_NAME, args })).toEqual({
      ...initialState,
      playerName,
    });
  });
});