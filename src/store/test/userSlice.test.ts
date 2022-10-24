import {IUser} from "../../types/IUser";
import userReducer, {setCurrentUser, setUsers } from "../usersSlice";
import {usersTestData} from "../../mocks/usersTestData";

interface State {
    users: IUser[] | null
    currentUserNickname: string
}

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