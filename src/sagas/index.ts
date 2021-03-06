
import { all, fork } from 'redux-saga/effects'
import userSaga from './user'
import loginSaga from './user'

export default function* rootSaga() {
  yield all([
    fork(userSaga),
    fork(loginSaga),
  ])
}