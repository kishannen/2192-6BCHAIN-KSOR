/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import './Conditional-Demo.css'
//comparing functions

function Greeting(){
    return(
        <h1>Hello! I am a standard function.</h1>
    );
}

const ArrowGreeting = () => (
    <h1>Hello! I am an arrow function.</h1>
);

//function with an arrow functions
function ShinyButton (){
    const handleClick = () => {
        alert("You clicked me!")
    }
    return(
        <button onClick={handleClick}>
            Click this Button!
        </button>
    )
}

export default ShinyButton;