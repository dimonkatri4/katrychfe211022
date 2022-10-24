import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentUser } from '../../store/selectors/usersSelectors';
import style from './userInDetail.module.css';
import { useAppDispatch } from '../../hooks/redux';
import { setCurrentUser } from '../../store/usersSlice';

interface Props {
    onChangeIsDetail: (value: boolean) => void;
}

const UserInDetail = ({ onChangeIsDetail }: Props) => {
    const dispatch = useAppDispatch();
    const currentUser = useSelector(getCurrentUser);

    const handleCloseClick = () => {
        onChangeIsDetail(false);
        dispatch(setCurrentUser(''));
    };

    return (
        <>
            {currentUser ? (
                <div className={style.userInfo} data-testid='userInDetail'>
                    <div className={style.userPhoto}>
                        <img className={style.ava} src={`/photo/${currentUser.photo}`} />
                    </div>
                    <div className={style.name}>{currentUser.name}</div>
                    <div className={style.position}>{currentUser.position}</div>
                    <div className={style.detailInfo}>
                        <span>Phone:</span> {currentUser.phone}
                    </div>
                    <div className={style.detailInfo}>
                        <span>Email:</span> {currentUser.email}
                    </div>
                    <div className={style.detailInfo}>
                        <span>Nickname:</span> {currentUser.nickname}
                    </div>
                    <div className={style.buttons}>
                        <button className={style.button}>Send Message</button>
                    </div>
                    <button onClick={() => handleCloseClick()} className={style.close}>
                        X
                    </button>
                </div>
            ) : null}
        </>
    );
};

export default UserInDetail;
