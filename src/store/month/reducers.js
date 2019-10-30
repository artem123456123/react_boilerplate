import { SET_MONTH_TEXT } from './../constants';

const initialState = {
  monthText: ''
}

export const monthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONTH_TEXT:
      return {
        ...state,
        monthText: action.payload
      }
  }

  return state;
}