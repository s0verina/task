import { USER_RN } from '../reducers/user';

export const currentUserSelector = (state: any) => state[USER_RN].currentUser;

export const regesterUserErrorSelector = (state: any) => state[USER_RN].error;