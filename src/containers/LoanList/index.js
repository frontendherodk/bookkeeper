import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import loanSelector from '../../selectors/loans';
import './index.scss';

class LoanList extends Component {
  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Loans</h2>
          <Link className="link link--local" to="/loans/add">
            Add loan
          </Link>
        </header>
        <div className="content__body">
          {' '}
          {this.props.loans.length < 1 &&
            <div className="no-results">No loans have been created</div>
          }
          <ul className="loan-list list">
            {this.props.loans.map(loan => {
              return (
                <li className="list__item" key={loan.id}>
                  <Link className="list__link" to={`loan/${loan.id}`}>
                    <div className="w">
                      <h2 className="list__item__title">
                        {loan.user.firstname}
                        {' '}
                      </h2>
                      <span className="amount">€{loan.amount}</span>
                    </div>
                    <div className="note">
                      borrowed from {loan.from.firstname}
                    </div>
                    <div className="meta">
                      <span className="material-icons md-12">
                        date_range
                      </span>
                      {loan.date}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loans: loanSelector(state)
});

export default connect(mapStateToProps)(LoanList);
