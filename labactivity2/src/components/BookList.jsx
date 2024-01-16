/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import React from "react";
import { render } from 'react-dom';
import "./BookList.css"

function BookList (){
        return(
            <div class="book-list">
                <table class="fl-table">
                    <thead>
                    <tr>
                        <th>Book Title</th>
                        <th>Author's Name</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>The Princess Diaries</td>
                        <td>Meg Cabot</td>
                    </tr>
                    <tr>
                        <td>The Seven Husbands of Evelyn Hugo</td>
                        <td>Taylor Jenkins Reid</td>
                    </tr>
                    <tr>
                        <td>Percy Jackson and the Lightning Thief</td>
                        <td>Rick Riordan</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }


export default BookList;