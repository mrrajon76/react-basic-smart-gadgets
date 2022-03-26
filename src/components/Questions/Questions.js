import React from 'react';
import './Questions.css'

const Questions = () => {
    return (
        <div className='container'>
            <div className="question-block">
                <h2>Props vs State</h2>
                <p>Props are immutable, we can't change the props data from inside the component. It is used to pass data from one component to another component. It acts like a function argument to pass data. We can pass any data type, callback functions, state data through props. On the other hand, the state is mutable so we can change state value. It is used to store data or information about the component. It starts with a default value and can be changed depending on user activity or system events.</p>
            </div>
            <div className="question-block">
                <h2>How useState() Works?</h2>
                <p>The useState function is a very popular React hook, which helps us to add a state to a functional component. When we declare a useState function, it accepts an initial value of the state property as an argument. This function contains two things. One is a variable that returns the current value of the state property and another thing is a method to update the value of the state property. To use this useState special function, we need to import useState from react. Then we can declare the function by passing the initial value as shown below, where the state variable contains the current value of the state and the setState method is used to update the value of the state.
                    <br /><b>const [state, setState] = useState(initialstate)</b></p>
            </div>
        </div>
    );
};

export default Questions;