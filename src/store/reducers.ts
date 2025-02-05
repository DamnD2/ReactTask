import { combineReducers } from 'redux';
import { setThemeInterface, setTokenInterface } from './interfaces';
import { SET_THEME, SET_TOKEN } from './types';

export function themeReducer(state = '', action: setThemeInterface): string {
  switch (action.type) {
    case SET_THEME:
      return action.payload;

    default: return state;
  }
}

export function tokenReducer(state = '', action: setTokenInterface): string {
  switch (action.type) {
    case SET_TOKEN:
      return action.payload;

    default: return state;
  }
}

const rootReducer = combineReducers({
  theme: themeReducer,
  token: tokenReducer,
});

export default rootReducer;
