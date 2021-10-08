import { usersAPI } from "./api/api";

const SET_USERS = 'SET_USERS';
const DELETE_USER = 'DELETE_USER';
const PUSH_USER = 'PUSH_USER';
let initialState = {
    users: []
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case DELETE_USER: {
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.userId)
            }
        }
        case PUSH_USER: {
            let newUser = {
                id: state.users.length + 1,
                email: action.user.email,
                first_name: action.user.first_name,
                last_name: action.user.last_name,
                avatar: ''
            };
            return {
                ...state,
                users: [...state.users, newUser]
            }
        }
        default:
            return state;
    }
};

export const setUsers = (users) => ({ type: SET_USERS, users })
export const getUsers = () => {
    return async (dispatch) => {
        let data = await usersAPI.getUsers()
        dispatch(setUsers(data.data));
    }
}
export const pushUser = (user) => ({ type: PUSH_USER, user })
export const deletePost = (userId) => ({ type: DELETE_USER, userId })

export default usersReducer;



