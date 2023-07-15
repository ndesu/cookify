import React from 'react';
import IngredientList from './IngredientList';
import IngredComp from './IngredComponent';

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemList: [],
    };
  }

  handleIngredCompSelect = (item) => {
    this.setState((prevState) => ({
      itemList: [...prevState.itemList, item],
    }));
  };

  render() {
    const { itemList } = this.state;

    return (
      <div>
        <IngredComp onSelect={this.handleIngredCompSelect}
            type="vegetables" 
        />
        <IngredComp onSelect={this.handleIngredCompSelect} 
            type="seasonings"
        />
        {/* Add more IngredComp components with the same onSelect handler */}
        <IngredientList itemList={itemList} />
      </div>
    );
  }
}

export default ParentComponent;
