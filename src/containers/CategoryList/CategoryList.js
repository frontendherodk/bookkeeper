import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './CategoryList.scss';

class CategoryList extends Component {
  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Categories</h2>
          <Link className="link link--local" to="/categories/add">
            Add category
          </Link>
        </header>
        <div className="content__body">
          {' '}
          <ul className="category-list list">
            {this.props.categories.map(category => (
              <li className="list__item" key={category.id}>
                <Link className="list__link" to={`categories/${category.id}`}>
                  <h2 className="list__item__title">{category.name}</h2>
                  <span style={{color: category.color.hex}} className="material-icons md-24 list__icon">
                    {category.icon}
                  </span>
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
  categories: state.categories
});

export default connect(mapStateToProps)(CategoryList);
