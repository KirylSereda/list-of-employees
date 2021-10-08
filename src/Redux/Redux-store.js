import { createStore,combineReducers,applyMiddleware} from "redux";
import usersReducer from "./users-reducer";
import thunkMiddlewar from 'redux-thunk'

let reducers = combineReducers({
    usersPage:usersReducer
});

const store = createStore(reducers, (applyMiddleware(thunkMiddlewar)))

export default store;