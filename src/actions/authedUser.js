// export const SET_AUTHED_USER='SET_AUTHED_USER';
import history from "../components/history";
export const LOGIN ='LOGIN';
export const LOGOUT = 'LOGOUT'

// export function setAuthedUser(id){
//     return {
//         type:SET_AUTHED_USER,
//         id

//     }
// }

export const authenticate = (user, redirectUrl) => (dispatch) => {

    dispatch(logIn(user));
    history.push(redirectUrl);

};
export const logoutUser = (redirectUrl) => (dispatch) => {

  dispatch(logOut());
  history.push(redirectUrl);

};

export const logIn = (user) => {
    return {
      type: LOGIN,
     user
    }
  }
  
  export const logOut = () => {
    return {
      type: LOGOUT
    }
  }