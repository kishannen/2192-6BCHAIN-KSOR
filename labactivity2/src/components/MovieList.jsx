/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from "react";
import { render } from 'react-dom';
import "./MovieList.css";

export default class MovieList extends React.Component{
    render() {
        return(
        <div class="container">
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img src="https://th.bing.com/th/id/OIP.QYraUxXt55Xuw-1scEyeUwHaJ4?rs=1&pid=ImgDetMain" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        Mean Girls
                    </h3>
                    <p>-2004-</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                    <img src="https://th.bing.com/th/id/R.3013e973591f0e4c73183f2a8884d953?rik=pbnGtljKGaq9sw&riu=http%3a%2f%2freellifewithjane.com%2fwp-content%2fuploads%2f2015%2f05%2fLegally-Blonde-2.jpg&ehk=DHAx1EFvHuW5Zndq22orm0catujEX%2fUq9WMBXzk4i%2bM%3d&risl=&pid=ImgRaw&r=0" />
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        Legally Blonde
                    </h3>
                    <p>-2001-</p>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="face face1">
                <div class="content">
                    <div class="icon">
                        <img src="https://th.bing.com/th/id/OIP.azJ8TDYddn-rlbN97lK17AHaLH?rs=1&pid=ImgDetMain"/>
                    </div>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <h3>
                        White Chicks
                    </h3>
                    <p>-2004-</p>
                </div>
            </div>
        </div>
    </div>
        );
    }
}