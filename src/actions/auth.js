export const loginUserSuccess = (token) => dispatch => {
    dispatch({
      type: 'LOGIN_USER_SUCCESS',
      payload: {
        token:token,
        boolean: true
      },
    })
  }