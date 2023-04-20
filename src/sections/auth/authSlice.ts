import { createSlice, PayloadAction } from "@reduxjs/toolkit" 
import { User } from "./user";

export interface LoginPayload {
    userName: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser? : User;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },

        logout(state){
            state.isLoggedIn = false;
            state.currentUser = undefined;
        }
    }
})
//Action
export const authAction = authSlice.actions;

//Selector
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectIsLogging = (state) => state.auth.logging;

//Reducer
const authReducer = authSlice.reducer;
export default authReducer;