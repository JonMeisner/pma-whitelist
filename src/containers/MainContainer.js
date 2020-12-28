import React from 'react';
import EmployeeList from '../components/EmployeeList';
import {useSelector} from 'react-redux';
import * as apis from '../apis/apis';

function MainContainer (props) {
    const employeeList = useSelector((state) => state.WhiteList.employeeList)

    const handleMinus = (index) => {
        const whiteListRank = employeeList[index].jobWhitelistLevel
        if (whiteListRank-1 >= -1) {
            employeeList[index].jobWhitelistLevel = whiteListRank-1
            apis.updateEmployeeWhitelist(employeeList[index])
        }
        
    }

    const handlePlus = (index) => {
        const rankLevel = employeeList[index].jobRankLevel
        const whiteListRank = employeeList[index].jobWhitelistLevel
        if (whiteListRank+1 <= rankLevel) {
            employeeList[index].jobWhitelistLevel = whiteListRank+1
            apis.updateEmployeeWhitelist(employeeList[index]);
        }
    }

    return (
        <EmployeeList employeeList={employeeList} closeApplication={props.closeApplication} handleMinus={handleMinus} handlePlus={handlePlus} />
    )
}

export default MainContainer;