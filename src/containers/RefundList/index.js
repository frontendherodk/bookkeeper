import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import refundSelector from '../../selectors/refunds';
import './index.scss';

class RefundList extends Component {
  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Refunds</h2>
          <Link className="link link--local" to="/refunds/add">
            Add refund
          </Link>
        </header>
        <div className="content__body">
          {' '}
          {this.props.refunds.length < 1 &&
            <div className="no-results">No refunds have been created</div>
          }
          <ul className="refund-list list">
            {this.props.refunds.map(refund => {
              return (
                <li className="list__item" key={refund.id}>
                  <Link className="list__link" to={`refund/${refund.id}`}>
                    <div className="w">
                      <h2 className="list__item__title">
                        {refund.user.firstname}
                        {' '}
                      </h2>
                      <span className="amount">€{refund.amount}</span>
                    </div>
                    <div className="note">
                      paid to {refund.from.firstname}
                    </div>
                    <div className="meta">
                      <span className="material-icons md-12">
                        date_range
                      </span>
                      {refund.date}
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
  refunds: refundSelector(state)
});

export default connect(mapStateToProps)(RefundList);
