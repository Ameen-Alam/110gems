import { AuthAction } from "../actions";

let AuthState = {
    LoginSuccess: true
}

let AuthReducer = (state = AuthState, action) => {
    switch (action.type) {

        case AuthAction.GET_ADMIN_LOGIN:
            return ({
                ...state,
                LoginSuccess: true
            })
        default:
            return state
    }
}
export default AuthReducer; 