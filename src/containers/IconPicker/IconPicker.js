import React, { Component, PropTypes } from 'react';
import { icons } from '../../constants/icons';
import './IconPicker.scss';

class IconPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: icons[0],
      menuVisible: false
    };
  }
  changeIcon = icon => {
    this.setState({
      selectedItem: icon,
      menuVisible: false
    });
    this.updateValue(icon);
  };
  toggleList = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  };
  updateValue = value => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value
      }
    });
  };
  componentWillMount() {
    this.updateValue(icons[0]);
  };
  render() {
    return (
      <div className="icon-picker">
        <span
          className={`selected-item ${this.state.menuVisible ? 'active' : ''}`}
          onClick={this.toggleList}
        >
          <span className="preview  material-icons md-24">
            {this.state.selectedItem}
          </span>
          {this.state.selectedItem.name}
        </span>
        <ul className={`icons ${!this.state.menuVisible ? 'hidden' : ''}`}>
          {icons.map(icon => {
            return (
              <li
                key={icon}
                className="icon"
                onClick={() => this.changeIcon(icon)}
              >
                <span className=" material-icons md-24">{icon}</span>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

IconPicker.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default IconPicker;
