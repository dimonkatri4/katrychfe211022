import React from "react";
import {render, screen} from "@testing-library/react";
import User from "../User";
import {usersTestData} from "../../../mocks/usersTestData";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

const user = usersTestData[0];
const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

describe('User component test', () => {
    it('User component should be render', () => {
        const onChangeIsDetailMock = jest.fn();
        render(<User user={user} onChangeIsDetail={onChangeIsDetailMock}/>);
        const elementUserName = screen.getByText(user.name);
        expect(elementUserName).toBeInTheDocument();
        expect(elementUserName.className).toBe('nameUser')
    });
})