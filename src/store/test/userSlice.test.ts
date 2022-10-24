import {IUser} from "../../types/IUser";
import userReducer, {setCurrentUser, setUsers } from "../usersSlice";

interface State {
    users: IUser[] | null
    currentUserNickname: string
}

const usersTestData = [
{
    phone: "902-738-3242",
    name: "Geordan Aaryn",
    nickname: "@geordanaaryn",
    email: "geordan.aaryn@fallinhay.com",
    position: "Chief Executive Officer",
    photo: "1.jpg"
},
{
    phone: "902-782-3286",
    name: "Brazil Izair",
    nickname: "@brazilizair",
    email: "brazil.izair@fallinhay.com",
    position: "Managing Director",
    photo: "2.jpg"
},
];

describe('Test userSlice', () => {
    let state: State;
    beforeEach(() => {
        state = {
            users: null,
            currentUserNickname: '',
        };
    });
    it('users should be set in state and it must newUsers', () => {
        const newUsers: IUser[] = usersTestData;
        const action = setUsers(newUsers);
        const newState = userReducer(state, action);
        expect(Array.isArray(newState.users)).toBe(true);
        expect(newState.users).toBe(newUsers);
    });

    it('currentUserNickname should be set in state and it must newCurrentUserNickname', () => {
        const newCurrentUserNickname: string = 'User nickname';
        const action = setCurrentUser(newCurrentUserNickname);
        const newState = userReducer(state, action);
        expect(typeof(newState.currentUserNickname) === "string").toBe(true);
        expect(newState.currentUserNickname).toBe(newCurrentUserNickname);
    });
})