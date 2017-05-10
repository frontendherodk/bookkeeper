import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './UserList.scss';

class UserList extends Component {
  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Users</h2>
          <Link className="link link--local" to="/">
            Add user
          </Link>
        </header>
        <div className="content__body">
          {' '}
          <ul className="user-list list">
            {this.props.users.map(user => (
              <li className="list__item" key={user.id}>
                <Link className="list__link" to={`users/${user.id}`}>
                  <h2 className="list__item__title">{user.firstname} {user.lastname}</h2>
                  <div className="list__note">{user.email}</div>
                </Link>
              </li>
            ))}
          </ul>
          {' '}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(UserList);
