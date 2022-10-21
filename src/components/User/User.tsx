import React from 'react';
import style from './user.module.css'
import {IUser} from "../../types/IUser";
import {useAppDispatch} from "../../hooks/redux";
import { setCurrentUser } from '../../store/usersSlice';

interface Props {
    user: IUser
    onChangeIsDetail: (value: boolean) => void
}

const User = ({user, onChangeIsDetail}: Props) => {

    const dispatch = useAppDispatch();

    const handleChangeUser = (nickname: string) => {
        dispatch(setCurrentUser(nickname))
        onChangeIsDetail(true)
    }

    return (
        <div>
            <div className={style.user}>
                <div className={style.userPhoto}>
                    <img className={style.ava} src={`/photo/${user.photo}`}/>
                </div>
                <div className={style.dataUser}>
                    <div className={style.nameUser}>{user.name}</div>
                    <div className={style.nicknameUser}>{user.nickname}</div>
                </div>
                <div className={style.buttons}>
                    <button onClick={() => handleChangeUser(user.nickname)} className={style.button}>View</button>
                </div>
            </div>
        </div>
    );
};

export default User;