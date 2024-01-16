/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from 'react';
import './Conditional-Demo.css'

export default function App() {
    return (
        <div className={`${isRainy === true ? 'dark' : 'light'}`}>
            <RainOrShine />
        </div>
    )
}

function Rainy(){
    return(
        <h1 class="rain"> Bring your umbrella!</h1>
    );
}

function Sunny(){
    return(
        <h1 class="sun"> Bring your sunglasses!</h1>
    );
}

const isRainy = true;

function RainOrShine(props){
    const isRainy = props.isRainy;
    return isRainy? <Rainy /> : <Sunny />
}