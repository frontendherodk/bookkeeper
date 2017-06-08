import React from 'react';
import { Link, Redirect, Route } from 'react-router-dom';

import ExpenseList from '../../containers/ExpenseList/ExpenseList';
import AddExpense from '../../containers/AddExpense/AddExpense';
import CategoryList from '../../containers/CategoryList/CategoryList';
import AddCategory from '../../containers/AddCategory/AddCategory';
import AddLoan from '../../containers/AddLoan/';
import UserList from '../../containers/UserList/UserList';
import Balance from '../../containers/Balance/Balance';

import './App.scss';

const App = () => (
  <div className="container">
    {/* TODO Refactor into own component*/}
    <div className="sidebar">
      <div className="logo">
        <h1 className="application__title">Bookkeeper</h1>
      </div>
      <div className="user">
        <span className="material-icons md-36">person</span>
        Henrik Andersen
      </div>
      <div className="balance-container">
        <Balance/>
      </div>
      <nav className="navigation">
        <ul className="menu">
          <li className="menu__item">
            <Link className="menu__link" to="/expenses">
              <i className="material-icons md-18">show_chart</i>
              <span>Expenses</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/loans">
              <i className="material-icons md-18">attach_money</i>
              <span>Loans</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/refunds">
              <i className="material-icons md-18">redo</i>
              <span>Refunds</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/categories">
              <i className="material-icons md-18">label</i>
              <span>Categories</span>
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/users">
              <i className="material-icons md-18">people</i>
              <span>Users</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div className="content">
      {/* TODO Refactor this into it's own file*/}
      <Route exact path="/" render={() => <Redirect to="/expenses" />} />
      <Route exact path="/expense/:id" component={AddExpense} />
      <Route exact path="/expenses" component={ExpenseList} />
      <Route exact path="/expenses/add" component={AddExpense} />
      <Route exact path="/categories" component={CategoryList} />
      <Route exact path="/categories/add" component={AddCategory} />
      <Route exact path="/loans/add" component={AddLoan} />
      <Route exact path="/users" component={UserList} />
      <Route exact path="/refunds" render={() => <div>REFUNDS</div>} />
    </div>
  </div>
);

export default App;
