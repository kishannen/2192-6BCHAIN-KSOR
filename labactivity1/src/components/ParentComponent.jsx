/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from "react";
import { render } from "react-dom"; //class component
import ChildComponent from './ChildComponent';

/*function ParentComponent(){
    const dataToPass = "King Wolf!";
    return(
        <ChildComponent message={dataToPass} />
        );
}

export default ParentComponent;*/

//Class Component

export default class ParentComponent extends React.Component{
    render() {
        const dataToPass = "King Wolf Component!";
    return(
        <ChildComponent message={dataToPass} />
        );
    }
}