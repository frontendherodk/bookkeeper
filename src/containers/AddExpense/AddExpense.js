import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addExpense } from '../../actions';
import { Link } from 'react-router-dom';
import { v4 } from 'node-uuid';
import moment from 'moment';

import './AddExpense.scss';

class AddExpense extends Component {
  constructor(props) {
    super(props);

    this.defaultState = {
      title: '',
      date: moment().locale('de').format('L'),
      note: '',
      amount: '',
      category: this.props.categories.length > 0 ? this.props.categories[0].id : 0,
      paidBy: this.props.users.length > 0 ? this.props.users[0].id : 0
    };

    this.state = this.defaultState;
  }

  handleAddExpense = e => {
    e.preventDefault();
    this.props.addExpense({
      id: v4(),
      date: this.state.date,
      title: this.state.title,
      note: this.state.note,
      amount: this.state.amount,
      category: this.state.category,
      paidBy: this.state.paidBy
    });
    this.resetState();
  };

  resetState() {
    this.setState(this.defaultState);
  }

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Add expense</h2>
          <Link className="link link--back" to="/expenses">
            <span className="material-icons md-12">navigate_before</span>
            Back
          </Link>
        </header>
        <div className="content__body">
          <form className="form" onSubmit={this.handleAddExpense}>
            <div className="form-group">
              <label htmlFor="title" className="form-group__label">
                Title
              </label>
              <input
                type="text"
                placeholder="Amazon"
                className="form-group__input input--text"
                name="title"
                value={this.state.title}
                autoComplete="off"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="amount" className="form-group__label">
                Amount
              </label>
              <input
                type="text"
                placeholder="12.95"
                className="form-group__input input--text"
                name="amount"
                autoComplete="off"
                value={this.state.amount}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="category" className="form-group__label">
                Category
              </label>
              {this.state.category.length > 0
                ? <select
                    name="category"
                    id=""
                    value={this.state.category}
                    onChange={this.handleInputChange}
                    className="form-group__input input--select"
                  >
                    {this.props.categories.map(category => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      );
                    })}

                  </select>
                : <input
                type="text"
                className="form-group__input input--text"
                autoComplete="off"
                placeholder="No category has been created"
                disabled="disabled"
              />}
            </div>

            <div className="form-group">
              <label htmlFor="paidBy" className="form-group__label">
                Paid by
              </label>
              <select
                name="paidBy"
                id=""
                value={this.state.paidBy}
                onChange={this.handleInputChange}
                className="form-group__input input--select"
              >
                {this.props.users.map(user => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.firstname}
                    </option>
                  );
                })}

              </select>
            </div>
            {/* TODO Create date input*/}
            <div className="form-group">
              <label htmlFor="date" className="form-group__label">Date</label>
              <input
                type="text"
                className="form-group__input input--text"
                name="date"
                autoComplete="off"
                placeholder="dd.mm.yyyy"
                value={this.state.date}
                onChange={this.handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="note" className="form-group__label">Note</label>
              <input
                type="text"
                className="form-group__input input--text"
                name="note"
                autoComplete="off"
                value={this.state.note}
                onChange={this.handleInputChange}
              />
            </div>

            <input
              type="submit"
              className="button button--primary"
              value="Add expense"
            />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addExpense: expense => {
      dispatch(addExpense(expense));
    }
  };
};

const mapStateToProps = state => ({
  categories: state.categories,
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(AddExpense);
