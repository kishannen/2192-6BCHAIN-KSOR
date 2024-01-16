/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from 'react';
import './Conditional-Demo.css'

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

function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy />
        );
    }
    else{
    return(
            <Sunny />
        );
    };
}

export default function App(){
    return(
        <div>
            <RainOrShine isRainy={false}/>
        </div>
    )
};