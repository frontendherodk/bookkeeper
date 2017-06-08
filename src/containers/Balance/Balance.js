import React, { Component } from 'react';
import { connect } from 'react-redux';

import balanceSelector from '../../selectors/balance';
import './Balance.scss';

class Balance extends Component {
  render() {
    if (this.props.balance > 0) {
      return <div className="balance plus">You're owed: <span className="balance__amount">{this.props.balance}€</span></div>;
    }
    return <div className="balance negative">You owe: <span className="balance__amount">{this.props.balance}€</span></div>;
  }
}

const mapStateToProps = state => ({
  balance: balanceSelector(state)
});

export default connect(mapStateToProps)(Balance);
