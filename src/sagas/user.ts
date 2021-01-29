import { put, takeLatest, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { registerUsersAsync as userActions } from '../actions';

function* userSaga(action: any) {
    const { name, password } = action.payload;
    let error = "";

    if (!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)) {
        error = "Password must at least 8 chars long, has one number, uppercase and lovercase letters";
    }

    if (!error) {
        localStorage.setItem(name, JSON.stringify(name));
        localStorage.setItem(password, JSON.stringify(password));

        yield put({
            type: getType(userActions.success), 
            payload: { name, password }
        });
    } else {
        yield put({
            type: getType(userActions.failure),
            payload: { error }
        });
    }
  }

  export default function* root() {
    yield all([
      takeLatest(getType(userActions.request), userSaga)
    ]);
  }