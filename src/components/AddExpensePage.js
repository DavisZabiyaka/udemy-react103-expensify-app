import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

// To avoid in-line functions, switching this to a class-based component
export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    };
    render() {
        return (
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.onSubmit}/>
            </div>
        );
    }
}

/*const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            // onSubmit above is defined in-line
            //props.dispatch(addExpense(expense));
            props.onSubmit(expense); // we can use this instead of dispatch after mapDispatchToProps argument passed in connect
            console.log(expense);
            props.history.push('/');
        }}/>
    </div>
);*/

// First argument is mapStateToProps
// Second function is mapDispatchToProps
/*const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (expense) => dispatch(addExpense(expense));
    };
};*/
const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);