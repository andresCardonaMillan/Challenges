import React from "react";

function NewsButtons({ onSubstract, onReset, onAdd}){
    return(
        <div>
            <button onClick={onSubstract}>manejarSustraer</button>
            <button onClick={onReset}>manejarRestablecer</button>
            <button onClick={onAdd}>manejadAñadir</button>
        </div>
    );
}

export default NewsButtons