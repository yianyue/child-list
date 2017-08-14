import { ADD_CHILD, SAVE_CHILD } from '../actions/index';

const app = (state = [], action) => {
  switch (action.type) {
    case ADD_CHILD:
      return [
        ...state,
        {firstName: '', lastName: ''}
      ]
    case SAVE_CHILD:
      return [
        ...state.slice(0, action.idx),
        {...state[action.idx], ...action.data},
        ...state.slice(action.idx + 1)
      ]
    default:
      return state
  }
};

export default app;
