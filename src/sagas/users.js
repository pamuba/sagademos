import { takeEvery, takeLatest,  call, fork , put} from  'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../api/users';

//worker sagas
function* getUsers(){
    try{
        const result = yield call(api.getUsers);
         yield put(actions.getUsersSuccess({
             items: result.data.data //users
         }))
    }
    catch(e){}
}

function* createUser({payload}){
    try{
        yield call(api.createUser, {
            firstName: payload.firstName,
            lastName:payload.lastName
        });
        yield call(getUsers)
    }
    catch(e){}
}

//watcher sagas
function* watchGetUsersRequest(){
    yield takeEvery(actions.Types.GET_USERS_REQUEST, getUsers);
}

function* watchCreateUserRequest(){
    yield takeEvery(actions.Types.CREATE_USER_REQUEST, createUser);
}

const usersSagas = [
    fork(watchGetUsersRequest),
    fork(watchCreateUserRequest)
];

export default usersSagas;