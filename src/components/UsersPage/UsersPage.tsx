import React from 'react';
import {IUser} from "../../types/IUser";
import style from "./usersPage.module.css"
import User from "../User/User";

interface Props {
    users: IUser[]
    onChangeIsDetail: (value: boolean) => void
}

const UsersPage = ({users, onChangeIsDetail}: Props) => {

    const [isAll, setIsAll] = React.useState(false)
    const displayedUsers = isAll ? users : users.slice(0, 3)

    const handleChangeIsAll = (value: boolean) => {
        setIsAll(value)
    }

    return (
        <div className={style.users} data-testid='usersPage'>
            {displayedUsers.map(user => <User onChangeIsDetail={onChangeIsDetail} key={user.nickname} user={user}/>)}
            <div className={style.buttonBlock}>
                <button
                    onClick={() => handleChangeIsAll(!isAll)}
                    className={style.viewAll}>
                    {!isAll ? 'View All' : 'Show Less'}
                </button>
            </div>
        </div>
    );
};

export default UsersPage;