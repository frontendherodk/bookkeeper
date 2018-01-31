import { createSelector } from 'reselect';

const loans = state => state.loans;
const users = state => state.users;

const loansWithDetails = (loans, users) => {
  const loanWithDetails = loans.map(loan => {
    const from = users.filter(user => user.id === loan.from);
    const to = users.filter(user => user.id === loan.user);
    const newExp = { ...loan, from: from[0], user: to[0] };
    return newExp;
  });
  return loanWithDetails;
};

export default createSelector(loans, users, loansWithDetails);



