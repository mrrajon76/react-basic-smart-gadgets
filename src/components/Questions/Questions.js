import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <div className="question-block">
                <h2>How React Works?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta fuga incidunt reprehenderit ullam sapiente, voluptatum doloremque natus aperiam sint pariatur quia cupiditate velit, qui accusantium temporibus, minus alias deleniti.</p>
            </div>
            <div className="question-block">
                <h2>Props vs State</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta fuga incidunt reprehenderit ullam sapiente, voluptatum doloremque natus aperiam sint pariatur quia cupiditate velit, qui accusantium temporibus, minus alias deleniti.</p>
            </div>
            <div className="question-block">
                <h2>How useState() Works?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dicta fuga incidunt reprehenderit ullam sapiente, voluptatum doloremque natus aperiam sint pariatur quia cupiditate velit, qui accusantium temporibus, minus alias deleniti.</p>
            </div>
        </div>
    );
};

export default Questions;