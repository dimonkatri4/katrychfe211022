import React, {useEffect, useState} from 'react';
import {setMockUsersData} from "../store/usersSlice";
import {useAppDispatch} from "../hooks/redux";
import {useSelector} from "react-redux";
import {getUsers} from "../store/selectors/usersSelectors";
import UsersPage from "./UsersPage/UsersPage";
import './App.css'
import UserInDetail from "./UserInDetail/UserInDetail";

function App() {

    const dispatch = useAppDispatch()
    const users = useSelector(getUsers)

    const [isDetail, setIsDetail] = useState(false)

    const handleChangeIsDetail = (value: boolean) => {
        setIsDetail(value)
    }

    useEffect(() => {
        dispatch(setMockUsersData())
    }, [])

    return (
        <div className='appWrapper'>
            <div className='main_content'>
                {users && !isDetail ?
                    <UsersPage users={users} onChangeIsDetail ={handleChangeIsDetail}/> : null}
                {isDetail && <UserInDetail onChangeIsDetail ={handleChangeIsDetail}/>}
            </div>
        </div>
    );
}

export default App;