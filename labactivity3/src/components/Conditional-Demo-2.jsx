/*Kisses Shannen O. Reyes
WD401
6BCHAIN */

import './Conditional-Demo.css'
function Rainy(){
   return(
    <h1 class="rain">Bring your umbrella!</h1>
   );
}

function RainOrShine(props){
    const isRainy = props.isRainy;
    if(isRainy){
        return(
            <Rainy />
        );
    }
    return(
        <h1 class="no-rain">No rain today!</h1>
    );
}

export default function App(){
    return(
        <div>
            <RainOrShine isRainy={true}/>
        </div>
    )
};