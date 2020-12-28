import * as types from './whitelist.actions';

const initialState = {
    showWL: false,
    employeeList : []
}

const WhitelistReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_WHITELIST:
            return {
                ...state,
                showWL: true,
            }
        case types.HIDE_WHITELIST:
            return {
                ...state,
                showWL: false,
            }
        case types.LOAD_EMPLOYEE_LIST:
            return {
                ...state,
                employeeList: action.payload
            }
        case types.UPDATE_EMPLOYEE_LIST:
            return {
                ...state,
                employeeList: action.payload
            }
        case types.CLEAR_EMPLOYEE_LIST:
            return {
                ...state,
                employeeList: []
            }
        default:
            return state;
    }
};

export default WhitelistReducer;