import React, { Component, PropTypes } from 'react';
import { colors } from '../../constants/colors';

import './SwatchPicker.scss';

class SwatchPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: colors[0],
      menuVisible: false
    };
  }
  changeColor = color => {
    this.setState({
      selectedItem: color,
      menuVisible: false
    });
    this.updateValue(color);
  };
  updateValue = value => {
    this.props.onChange({
      target: {
        name: this.props.name,
        value
      }
    });
  };
  toggleList = () => {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  };
  componentWillMount = () => {
    this.updateValue(colors[0]);
  };
  render() {
    return (
      <div className="swatch-picker">
        <span
          className={`selected-item ${this.state.menuVisible ? 'active' : ''}`}
          onClick={this.toggleList}
        >
          <span className="preview" style={{background: this.state.selectedItem.hex}} />
          {this.state.selectedItem.name}
        </span>
        <ul className={`swatches ${!this.state.menuVisible ? 'hidden' : ''}`}>
          {colors.map(color => {
            return (
              <li
                key={color.id}
                className="swatch"
                onClick={() => this.changeColor(color)}
              >
                <span className="preview" style={{background: color.hex}} />
                {color.name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

SwatchPicker.propTypes = {
  onChange: PropTypes.func.isRequired
};

export default SwatchPicker;
