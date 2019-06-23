import React from "react";

const withActiveItem = (Component) => {
  class WithActiveItem extends React.PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        activeItem: ``
      };

      this._selectHandler = this._selectHandler.bind(this);
    }

    render() {
      const {activeItem} = this.state;
      return <Component
        {...this.props}
        onSelect={this._selectHandler}
        activeItem={activeItem}
      />;
    }

    _selectHandler(item) {
      this.setState({activeItem: item});
    }
  }

  return WithActiveItem;
};

export default withActiveItem;
