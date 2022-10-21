import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "../types/IUser";


const initialState = {
    users: null as IUser[] | null
}

const usersSlice =createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<IUser[]>) => {
            state.users = action.payload
        }
    }
})

export const {setUsers} = usersSlice.actions

export default usersSlice.reducer