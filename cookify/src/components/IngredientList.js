import React from 'react';

class IngredientList extends React.Component {
    render() {
        const { itemList } = this.props;

        return (
            <div>
                <h1>List Component</h1>
                <ul>
                    {itemList.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default IngredientList;
