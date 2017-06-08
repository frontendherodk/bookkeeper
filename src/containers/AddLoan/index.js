import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'node-uuid';
import {addLoan} from '../../actions';

import { connect } from 'react-redux';

class AddLoan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.users.length > 0 ? this.props.users[0].id : 0,
      from: this.props.users.length > 0 ? this.props.users[0].id : 0,
      amount: ''
    };
  }

  handleAddLoan = e => {
    e.preventDefault();
    this.props.addLoan({
      id: v4(),
      user: this.state.user,
      from: this.state.from,
      amount: this.state.amount
    });
    //this.resetState();
  };

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
          <h2 className="content__title">Add loan</h2>
          <Link className="link link--back" to="/categories">
            <span className="material-icons md-12">navigate_before</span>
            Back
          </Link>
        </header>
        <div className="content__body">
          <form className="form" onSubmit={this.handleAddLoan}>
            <div className="form-group">
              <label htmlFor="user" className="form-group__label" />
              <select
                name="user"
                id=""
                value={this.state.user}
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

            <div className="form-group">
              <label htmlFor="amount" className="form-group__label">
                Borrowed
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
              <label htmlFor="from" className="form-group__label">
                From
              </label>
              <select
                name="from"
                id=""
                value={this.state.from}
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

            <div className="form-group">
              <input
                type="submit"
                className="button button--primary"
                value="Add loan"
              />
            </div>

          </form>
        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addLoan: loan => {
      dispatch(addLoan(loan));
    }
  };
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(AddLoan);
