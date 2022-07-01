import { ADD } from '../constants';

interface IAction {
  type: string;
  message: string;
}

const initialState: string[] = [];

export const messageReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}