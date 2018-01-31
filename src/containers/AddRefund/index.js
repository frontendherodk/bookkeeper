import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { v4 } from 'node-uuid';
import { addRefund } from '../../actions';
import moment from 'moment';
import { connect } from 'react-redux';

class AddRefund extends Component {
  constructor(props) {
    super(props);
    
    this.defaultState = {
      user: this.props.users.length > 0 ? this.props.users[0].id : 0,
      from: this.props.users.length > 0 ? this.props.users[0].id : 0,
      date: moment().locale('de').format('L'),
      amount: ''
    };

    this.state = this.defaultState;
  }

  handleAddRefunds = e => {
    e.preventDefault();
    this.props.addRefund({
      id: v4(),
      user: this.state.user,
      from: this.state.from,
      amount: this.state.amount,
      date: this.state.date
    });
    this.resetState();
  };

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value
    });
  };

  resetState() {
    this.setState(this.defaultState);
  }

  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Add refunds</h2>
          <Link className="link link--back" to="/refunds">
            <span className="material-icons md-12">navigate_before</span>
            Back
          </Link>
        </header>
        <div className="content__body">
          <form className="form" onSubmit={this.handleAddRefunds}>
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
                Paid
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
                To
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
              <input
                type="submit"
                className="button button--primary"
                value="Add refund"
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
    addRefund: refund => {
      dispatch(addRefund(refund));
    }
  };
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps, mapDispatchToProps)(AddRefund);
