import { createSelector } from 'reselect';

const categoriesSelector = state => state.categories;
const expensesSelector = state => state.expenses;
const usersSelector = state => state.users;

const expensesWithCategorySelector = (categories, expenses) => {
  const expensesWithDetails = expenses.map(expense => {
    const cat = categories.filter(category => {
      return category.id === expense.category;
    });
    const newExp = { ...expense, category: cat[0] };
    return newExp;
  });
  return expensesWithDetails;
};

const expensesWithUsersAndCategoriesSelector = (expenses, users) => {
  const expensesWithUsersAndCategories = expenses.map(expense => {
    const usr = users.filter(user => {
      return user.id === expense.paidBy;
    });
    const newExp = { ...expense, paidBy: usr[0] };
    return newExp;
  });
  return expensesWithUsersAndCategories;
};

const expenseSelector = createSelector(
  categoriesSelector,
  expensesSelector,
  expensesWithCategorySelector
);

export default createSelector(expenseSelector, usersSelector, expensesWithUsersAndCategoriesSelector);
