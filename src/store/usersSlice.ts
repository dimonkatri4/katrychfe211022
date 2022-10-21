import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../types/IUser";
import {AppDispatch} from "./store";
import initData from "../mocks/initData.json"


const initialState = {
    users: null as IUser[] | null,
    currentUserNickname: ''
}

const usersSlice =createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        },
        setCurrentUser: (state, action: PayloadAction<string>) => {
            state.currentUserNickname = action.payload
        }
    }
})

export const setMockUsersData = () => (dispatch: AppDispatch) => {
    dispatch(setUsers(initData))
}

export const {setUsers, setCurrentUser} = usersSlice.actions

export default usersSlice.reducer