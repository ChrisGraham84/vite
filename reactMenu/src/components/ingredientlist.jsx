import React from "react";
import Ingredient from "./ingredient";

export default function IngredientList({ list = []}){
    return(
        <ul className="bg-pink-600">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>
    );
}