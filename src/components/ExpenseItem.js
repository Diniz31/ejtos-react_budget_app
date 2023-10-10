import React, { useContext } from 'react';
import { FcCancel } from 'react-icons/fc';
import { FcPlus } from "react-icons/fc";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>£{props.cost}</td>
        <td><FcPlus cursor ='pointer' size = '2em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><FcCancel cursor ='pointer' size='2em' onClick={handleDeleteExpense}></FcCancel></td>
        </tr>
    );
};

export default ExpenseItem;
