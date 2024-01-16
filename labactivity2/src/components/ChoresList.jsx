/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from "react";
import { render } from 'react-dom';
import "./ChoresList.css";

export default class ChoresList extends React.Component{
    render() {
        return(
            <div class="list">
            <h3> TO DO LIST</h3>
            <ul>
              <li>Clean Porch</li>
              <li>Wash Car</li>
              <li>Attend BCHAIN Class</li>
            </ul>
          </div>
        );
    }
}