import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import expensesSelector from '../../selectors/expenses';

import './ExpenseList.scss';

class ExpensesList extends Component {
  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Expenses</h2>
          <Link className="link link--local" to="/expenses/add">
            Add expense
          </Link>
        </header>
        <div className="content__body">
          {' '}
          {this.props.expenses.length < 1 &&
            <div className="no-results">No expenses have been created</div>
          }
          <ul className="expense-list list">
            {this.props.expenses.map(expense =>
              <li className="list__item" key={expense.id}>
                <Link className="list__link" to={`expense/${expense.id}`}>
                  <div className="w">
                    <h2 className="list__item__title">{expense.title}</h2>
                    <span className="amount">€{expense.amount}</span>
                  </div>
                  <div className="note">
                    {expense.note}
                  </div>
                  <div className="meta">
                    <div
                      className="meta-col category"
                      style={{ borderColor: expense.category.color.hex }}
                    >
                      <span className="material-icons md-12">
                        {expense.category.icon}
                      </span>
                      {expense.category.name}
                    </div>
                    <div className="meta-col">
                      <span className="material-icons md-12">person</span>
                      {expense.paidBy.firstname}
                    </div>
                    <div className="meta-col">
                      <span className="material-icons md-12">
                        date_range
                      </span>
                      {expense.date}
                    </div>
                  </div>

                </Link>
              </li>
            )}
          </ul>
          {' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  expenses: expensesSelector(state)
});

export default connect(mapStateToProps)(ExpensesList);
