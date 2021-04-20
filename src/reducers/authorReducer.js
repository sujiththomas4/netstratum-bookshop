import { authors } from "../data/data";
import {GET_AUTHORS} from '../dispatchRefs';

const initialState = {
  authors: authors,
};

const authorReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      return state;
      break;
    default:
      return state;
  }
};

export default authorReducer;
