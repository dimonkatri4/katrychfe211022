import React from "react";
import {render, screen} from "@testing-library/react";
import UsersPage from "../UsersPage";
import {usersTestData} from "../../../mocks/usersTestData";

const users = usersTestData;
jest.mock('../../User/User',
    () =>
        function UserMock() {
            return <div/>
        });

describe('UsersPage component test', () => {
    it('UsersPage should be render', () => {
        const onChangeIsDetailMock = jest.fn();
        render(<UsersPage users={users} onChangeIsDetail={onChangeIsDetailMock}/>)
        expect(screen.getByTestId('usersPage')).toBeInTheDocument();
    })
})