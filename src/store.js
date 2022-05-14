import { createStore } from "redux";

const initialState = {
  comments: [],
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case "setComments":
      return {
        ...state,
        comments: action.comments,
      };

    case "addComment":
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };

    case "UpdateComment":
      return {
        ...state,
        comments: action.comments,
      };

    case "RemoveComment":
      return {
        ...state,
        comments: state.comments.filter((c) => c.id !== action.payload),
      };

    default:
      return state;
  }
}

let store = createStore(userReducer);

export default store;
