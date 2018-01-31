import { createSelector } from 'reselect';

const refunds = state => state.refunds;
const users = state => state.users;

const refundsWithDetails = (refunds, users) => {
  const refundsWithDetails = refunds.map(refund => {
    const from = users.filter(user => user.id === refund.from);
    const to = users.filter(user => user.id === refund.user);
    const newExp = { ...refund, from: from[0], user: to[0] };
    return newExp;
  });
  return refundsWithDetails;
};

export default createSelector(refunds, users, refundsWithDetails);
