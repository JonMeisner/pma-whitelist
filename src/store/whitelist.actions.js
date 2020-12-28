export const SHOW_WHITELIST = "SHOW_WHITELIST";
export const HIDE_WHITELIST = "HIDE_WHITELIST";

export const LOAD_EMPLOYEE_LIST = "LOAD_EMPLOYEE_LIST";
export const UPDATE_EMPLOYEE_LIST = "UPDATE_EMPLOYEE_LIST";
export const CLEAR_EMPLOYEE_LIST = "CLEAR_EMPLOYEE_LIST";

export const showWhitelist = () => ({
    type: SHOW_WHITELIST,
})

export const hideWhitelist = () => ({
    type: HIDE_WHITELIST,
})

export const loadEmployeeList = (employee) => ({
    type: LOAD_EMPLOYEE_LIST,
    payload: employee,
})

export const updateEmployeeList = (employee) => ({
    type: UPDATE_EMPLOYEE_LIST,
    payload: employee,
})

export const clearEmployeeList = () => ({
    type: CLEAR_EMPLOYEE_LIST,
})