import {createSelector} from "@reduxjs/toolkit";
import {RootState} from "../store";

export const getUsers = (state: RootState) => state.users.users
export const getCurrentUserNickname = (state: RootState) => state.users.currentUserNickname

export const getCurrentUser = createSelector(getUsers,
    getCurrentUserNickname,
    (users, currentUserNickname) => {
        if (users) return users.find(user => user.nickname === currentUserNickname)
    })