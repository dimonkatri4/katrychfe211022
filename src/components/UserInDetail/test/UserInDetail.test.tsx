import React from "react";
import {render, screen} from "@testing-library/react";
import UserInDetail from "../UserInDetail";
import { useSelector, useDispatch } from 'react-redux';

const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: () => [],
    useDispatch: () => mockDispatch
}));

describe('UserInDetail test', () => {
    it('UserInDetail component should be render', () => {
        const onChangeIsDetailMock = jest.fn();
        render(<UserInDetail onChangeIsDetail={onChangeIsDetailMock}/>);
        const elementInComponent = screen.getByText(/nickname:/i);
        expect(elementInComponent).toBeInTheDocument();
        expect(screen.getByTestId('userInDetail')).toBeInTheDocument();
    })
})