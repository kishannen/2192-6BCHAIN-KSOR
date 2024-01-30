/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from 'react';

function Bible(){
    return(
        <div class="show">
            <h3>The Bible consist of the Old and New Testament. </h3>
            <h4 class="color-true">Correct!</h4>
            <h3>Moses led the Israelites out of Egypt. </h3>
            <h4 class="color-true">Correct!</h4>
            <h3>The Sermon on the Mount is found in the Book of Luke.</h3>
            <h4 class="color-false">Incorrect!</h4>
        </div>
    );
}

function Quiz(){
    return(
        <div class="no-response">
            <h3>The Bible consist of the Old and New Testament. </h3>
            <h3>Moses led the Israelites out of Egypt. </h3>
            <h3>The Sermon on the Mount is found in the Book of Luke.</h3>
        </div>
    );
}

function BibleQuiz(props){
    const showAnswer = props.showAnswer;
    if(showAnswer){
        return(
            <Bible />
        );
    }
    else{
    return(
            <Quiz />
        );
    };
}

export default function App(){
    return(
        <div>
            <BibleQuiz showAnswer={true}/>
        </div>
    )
};