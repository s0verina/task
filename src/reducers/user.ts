
import { Reducer } from 'redux';
import { getType } from "typesafe-actions";
import { registerUsersAsync as userActions } from '../actions';

interface IUser {
    name: string
    password: string
}

interface IUserState {
    currentUser: IUser
    loading: boolean
    error: string
}

const initialState: IUserState = {
    currentUser: {
        name: '',
        password: ''
    },
    loading: false,
    error: ''
};

export const USER_RN = "USER";

const userReducer: Reducer<IUserState> = (state = initialState, action): IUserState => {
    switch (action.type) {
        case getType(userActions.request):
            return Object.assign({}, state, {
                loading: true,
                error: false
            })
        case getType(userActions.success):
            return ({
                ...state,
                currentUser: action.payload
            })
        case getType(userActions.failure):
            return ({
                ...state,
                loading: false,
                error: action.payload
            })
        default:
            return state;
    }
};

export default userReducer;