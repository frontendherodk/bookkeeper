import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../../actions';
import { Link } from 'react-router-dom';
import { v4 } from 'node-uuid';

import SwatchPicker from '../SwatchPicker/SwatchPicker';
import IconPicker from '../IconPicker/IconPicker';

class AddCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      icon: '',
      color: ''
    };
  }

  handleAddCategory = e => {
    e.preventDefault();
    this.props.addCategory({
      id: v4(),
      name: this.state.name,
      color: this.state.color,
      icon: this.state.icon
    });
    this.resetState();
  };

  resetState() {
    this.setState({
      name: '',
      color: '',
      icon: ''
    });
  }

  handleInputChange = e => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div>
        <header className="content__header">
          <h2 className="content__title">Add category</h2>
          <Link className="link link--back" to="/categories">
            <span className="material-icons md-12">navigate_before</span>
            Back
          </Link>
        </header>
        <div className="content__body">
          <form className="form" onSubmit={this.handleAddCategory}>
            <div className="form-group">
              <label htmlFor="name" className="form-group__label">Name</label>
              <input
                type="text"
                className="form-group__input input--text"
                name="name"
                value={this.state.name}
                autoComplete="off"
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="icon" className="form-group__label">Icon</label>
              <IconPicker
                name="icon"
                value={this.state.icon}
                onChange={this.handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="color" className="form-group__label">
                Color
              </label>
              <SwatchPicker name="color" onChange={this.handleInputChange} />
            </div>

            <div className="form-group">
              <input
                type="submit"
                className="button button--primary"
                value="Add category"
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
    addCategory: category => {
      dispatch(addCategory(category));
    }
  };
};

export default connect(null, mapDispatchToProps)(AddCategory);
