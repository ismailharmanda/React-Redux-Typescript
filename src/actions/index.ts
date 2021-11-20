import axios from "axios";
import { stringify } from "querystring";
import { Dispatch } from "redux";

const url = "https://jsonplaceholder.typicode.com/todos";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios.get(url);
    dispatch({
      type: "FETCH_TODOS",
      payload: response.data,
    });
  };
};
