import React from "react";
import IngredientList from "./ingredientlist";
import Instructions from "./instructions";

export default function Recipe({
    name = "untitled",
    ingredients = [],
    steps = [],
}){
    return(
        <section className="bg-orange-500" id={name.toLocaleLowerCase().replace(/ /g, "-")}>
            <h1 className="font-bold">{name}</h1>
            <IngredientList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    );
}