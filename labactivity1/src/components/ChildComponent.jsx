/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from "react";

/*function ChildComponent(props){
    return(
        <div>
            <p>{props.message}</p>
        </div>
        );
}

export default ChildComponent;*/

//Class Components
export default class ChildComponent extends React.Component{
    render() {
        return(
            <div>
            <p>{this.props.message}</p>
        </div>
        );
    }
}