import React, { useContext } from 'react';
import { FcCancel } from 'react-icons/fc';
import { FcPlus } from "react-icons/fc";
import { FcMinus } from "react-icons/fc";
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch, currency } = useContext(AppContext);
  // decrease by 10 the cost
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };
   // increase by 10 the cost
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
     // delete the cost
    const deleteAllocation = (name) => {

        dispatch({
            type:'DELETE_EXPENSE',
            payload: name
        })

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><FcPlus cursor ='pointer' size = '2em' onClick={event=> increaseAllocation(props.name)}></FcPlus></td>
        <td><FcMinus cursor ='pointer' size='2em' onClick={event=> decreaseAllocation(props.name)}></FcMinus></td>
        <td><FcCancel cursor ='pointer' size='2em' onClick={event=> deleteAllocation(props.name)}></FcCancel></td>
        </tr>
    );
};

export default ExpenseItem;
