import { createAsyncAction } from 'typesafe-actions';

export const registerUsersAsync = createAsyncAction(
    'REGISTER_USER_REQUEST',
    'REGISTER_USER_SUCCESS',
    'REGISTER_USER_FAILURE'
  )<any, any, any>();

export const loginUsersAsync = createAsyncAction(
    'LOGIN_USER_REQUEST',
    'LOGIN_USER_SUCCESS',
    'LOGIN_USER_FAILURE'
)<any, any, any>();