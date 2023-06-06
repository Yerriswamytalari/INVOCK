import axios from 'axios';

export const fetchUser = (username) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const user = response.data;
      dispatch({ type: 'FETCH_USER_SUCCESS', payload: user });
    } catch (error) {
      dispatch({ type: 'FETCH_USER_FAILURE', payload: error.message });
    }
  };
};
