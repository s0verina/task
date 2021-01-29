import { put, takeLatest, all } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import { loginUsersAsync as loginActions } from '../actions';

function* loginSaga(action: any) {
    const { name, password } = action.payload;
    // const currentUserName = JSON.parse(localStorage.getItem("name"));
    // const currentUserPassword = JSON.parse(localStorage.getItem("password"));
}

  export default function* root() {
    yield all([
      takeLatest(getType(loginActions.request), loginSaga)
    ]);
  }