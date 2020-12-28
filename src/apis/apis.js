import axios from 'axios';

const closeWhitelistUrl = "http://pma-joblisting/CloseEmployees";
const saveWhitelistUrl = "http://pma-joblisting/SaveEmployees";

export const closeWhitelist = () => {
    return axios.post(closeWhitelistUrl, {})
}

export const updateEmployeeWhitelist = (employee) => {
    return axios.post(saveWhitelistUrl, {employee})
}