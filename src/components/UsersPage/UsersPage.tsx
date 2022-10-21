import React from 'react';
import {IUser} from "../../types/IUser";
import style from "./usersPage.module.css"
import User from "../User/User";

interface Props {
    users: IUser[]
    onChangeIsDetail: (value: boolean) => void
}

const UsersPage = ({users,onChangeIsDetail}: Props) => {
    return (
        <div className={style.users}>
            {users.map(user => <User onChangeIsDetail={onChangeIsDetail} key={user.nickname} user={user} />)}
        </div>
    );
};

export default UsersPage;