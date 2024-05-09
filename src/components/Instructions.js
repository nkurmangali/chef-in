import React from 'react';
import './Instructions.css'; // Import the CSS file

class Instructions extends React.Component {
    render() {
        const { instructions } = this.props;
        return (
            <div className="instructions-container">
                <h2 className="heading">Instructions:</h2>
                <ol className="instruction-list">
                    {instructions.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
            </div>
        );
    }
}

export default Instructions;
