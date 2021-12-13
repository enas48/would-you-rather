// export const SET_AUTHED_USER='SET_AUTHED_USER';
export const LOGIN ='LOGIN';
export const LOGOUT = 'LOGOUT'
// export function setAuthedUser(id){
//     return {
//         type:SET_AUTHED_USER,
//         id

//     }
// }

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