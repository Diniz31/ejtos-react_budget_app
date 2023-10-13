import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, currency, dispatch, totalExpenses } = useContext(AppContext);
    const handleBudgetChange = (event) => {
        // alert when the budget is lower && equal to the total expenses
        if (budget <= totalExpenses){
            alert('You cannot reduce the budget value lower than the spending');
        } else {dispatch({type: 'SET_BUDGET',
        payload: event.target.value}
        )}
    
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span> 
<input type="number" step="10" value={budget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
